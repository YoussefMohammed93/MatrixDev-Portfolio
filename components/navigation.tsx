"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBackground = dynamic(() => import("@/components/nav-background"), {
  loading: () => <div className="absolute inset-0 z-0 bg-background/30" />,
});

function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return function (this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function useActiveSection(sections: Array<{ id: string }>, offset = 100) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isProjectsPage, setIsProjectsPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      setIsProjectsPage(pathname.startsWith("/projects"));
    }
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isProjectsPage) {
        return;
      }

      const viewportHeight = window.innerHeight;
      let currentSection = "hero";
      let maxVisibleArea = 0;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) {
          console.warn(`Element with id ${section.id} not found`);
          continue;
        }

        const { offsetTop, offsetHeight } = element;
        const elementBottom = offsetTop + offsetHeight;

        const visibleTop = Math.max(offsetTop, window.scrollY);
        const visibleBottom = Math.min(
          elementBottom,
          window.scrollY + viewportHeight
        );
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        const visiblePercentage = (visibleHeight / offsetHeight) * 100;

        if (section.id === "timeline" && visiblePercentage > 30) {
          currentSection = "timeline";
          break;
        }

        if (section.id === "services" && visiblePercentage > 25) {
          currentSection = "services";
          break;
        }

        if (visiblePercentage > maxVisibleArea) {
          maxVisibleArea = visiblePercentage;
          currentSection = section.id;
        }
      }

      if (currentSection !== activeSection) {
        console.log(`Setting active section to: ${currentSection}`);
        setActiveSection(currentSection);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset, activeSection, isProjectsPage]);

  return { activeSection, isProjectsPage };
}

export default function Navigation() {
  const headerRef = useRef<HTMLElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const navLinks = [
    {
      name: "Home",
      href: "#hero",
      id: "hero",
      ariaLabel: "Navigate to home section",
    },
    {
      name: "About",
      href: "#about",
      id: "about",
      ariaLabel: "Navigate to about section",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
      ariaLabel: "Navigate to projects section",
    },
    {
      name: "Timeline",
      href: "#timeline",
      id: "timeline",
      ariaLabel: "Navigate to timeline section",
    },
    {
      name: "Skills",
      href: "#skills",
      id: "skills",
      ariaLabel: "Navigate to skills section",
    },
    {
      name: "Services",
      href: "#services",
      id: "services",
      ariaLabel: "Navigate to services section",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
      ariaLabel: "Navigate to contact section",
    },
  ];

  const { activeSection, isProjectsPage } = useActiveSection(navLinks, 150);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 10);
      setScrollY(window.scrollY / window.innerHeight);
    }, 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  const themeToggleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
    whileTap: { scale: 0.9 },
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden",
        isScrolled
          ? "bg-background/75 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-background/30 backdrop-blur-sm py-5"
      )}
      role="banner"
      aria-label="Main navigation"
    >
      <NavBackground scrollY={scrollY} />
      <div className="max-w-[1360px] mx-auto px-4 flex items-center justify-between">
        <motion.div initial="initial" animate="animate" variants={logoVariants}>
          <Link
            href="/"
            aria-label="Go to home page"
            className="text-2xl sm:text-3xl font-bold tracking-tighter"
          >
            Matrix<span className="text-primary">Dev</span>
          </Link>
        </motion.div>
        <nav
          className="hidden md:flex items-center space-x-5"
          aria-label="Main navigation"
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="initial"
              animate="animate"
              variants={navItemVariants}
              className="relative"
            >
              <Link
                href={isProjectsPage ? `/${link.href}` : link.href}
                className={cn(
                  "text-sm sm:text-base font-medium transition-all px-1 py-2 relative group",
                  link.id === "hero" && isProjectsPage
                    ? "hover:text-primary"
                    : activeSection === link.id
                    ? "text-primary"
                    : "hover:text-primary"
                )}
                aria-label={link.ariaLabel}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/20 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
                {activeSection === link.id &&
                  !(link.id === "hero" && isProjectsPage) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={{ opacity: 0, width: "30%" }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial="initial"
            animate="animate"
            whileTap="whileTap"
            variants={themeToggleVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Switch theme"
              className="relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: theme === "dark" ? 180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                  y: theme === "dark" ? 20 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-5 w-5 text-yellow-500" />
              </motion.div>
              <motion.div
                initial={{ rotate: -180 }}
                animate={{
                  rotate: theme === "dark" ? 0 : -180,
                  scale: theme === "dark" ? 1 : 0,
                  y: theme === "dark" ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-5 w-5 text-blue-300" />
              </motion.div>
            </Button>
          </motion.div>
        </nav>
        <div className="flex items-center md:hidden">
          <motion.div
            initial="initial"
            animate="animate"
            whileTap="whileTap"
            variants={themeToggleVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Switch theme"
              className="relative overflow-hidden group mr-2"
            >
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: theme === "dark" ? 180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                  y: theme === "dark" ? 20 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-5 w-5 text-yellow-500" />
              </motion.div>
              <motion.div
                initial={{ rotate: -180 }}
                animate={{
                  rotate: theme === "dark" ? 0 : -180,
                  scale: theme === "dark" ? 1 : 0,
                  y: theme === "dark" ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-5 w-5 text-blue-300" />
              </motion.div>
            </Button>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            whileTap="whileTap"
            variants={themeToggleVariants}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-6 w-6 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-background/80 backdrop-blur-md border-b border-border/40"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1 border-b">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={mobileNavItemVariants}
                  className="overflow-hidden"
                >
                  <Link
                    href={isProjectsPage ? `/${link.href}` : link.href}
                    className={cn(
                      "flex items-center text-sm font-medium py-3 px-3 rounded-md transition-all relative overflow-hidden",
                      link.id === "hero" && isProjectsPage
                        ? "hover:bg-primary/5"
                        : activeSection === link.id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-primary/5"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={link.ariaLabel}
                    aria-current={
                      activeSection === link.id ? "page" : undefined
                    }
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5 -z-10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="flex items-center"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                      {activeSection === link.id &&
                        !(link.id === "hero" && isProjectsPage) && (
                          <motion.div
                            layoutId="activeMobileSection"
                            className="ml-2 h-2 w-2 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          />
                        )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
