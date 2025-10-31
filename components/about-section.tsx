import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutSectionClient, {
  AboutHeading,
  AboutUnderline,
  AboutParagraph,
  AboutButtons,
} from "./about-section-client";

export const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Youssef Mohamed",
  jobTitle: "Front-End Developer & Content Creator",
  description:
    "Front-End Developer and Information Systems student passionate about building modern, accessible, and high-performance web experiences with 30+ freelance projects completed",
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN UI",
    "Framer Motion",
    "Svelte",
    "Convex",
    "Web Development",
    "UI/UX Design",
    "AI Integration",
    "Automation",
  ],
  url: "https://youssefmohammed.com",
  sameAs: [
    "https://github.com/YoussefMohammed93",
    "https://www.linkedin.com/in/youssef-mohammed-6893a031b",
    "https://www.facebook.com/profile.php?id=61552702670893",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mansoura University",
    department: "Information Systems",
  },
};

export function generateMetadata(): Metadata {
  return {
    title: "About Youssef Mohamed - Front-End Developer & Content Creator",
    description:
      "Learn about Youssef Mohamed, a Front-End Developer and Information Systems student at Mansoura University with 30+ freelance projects, passionate about modern web development, AI integration, and content creation.",
    alternates: {
      canonical: "https://youssefmohammed.com/about",
    },
  };
}

export default function AboutSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 bg-muted dark:bg-muted/50"
        aria-labelledby="about-heading"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-6">
          <AboutSectionClient>
            <div
              className="relative h-[500px] rounded-2xl overflow-hidden order-2 md:order-1 md:col-span-4 w-full group"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src="/me.jpg"
                alt="Youssef Mohamed - Front-End Developer"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                quality={90}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                style={{
                  objectFit: "cover",
                }}
              />
              <meta
                itemProp="url"
                content="https://youssefmohammed.com/me-about.jpg"
              />
              <meta
                itemProp="contentUrl"
                content="https://youssefmohammed.com/me-about.jpg"
              />
            </div>
            <div className="space-y-5 sm:space-y-6 order-1 md:order-2 md:col-span-8">
              <AboutHeading>
                <h2
                  id="about-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                  itemProp="headline"
                >
                  About Me
                </h2>
                <AboutUnderline />
              </AboutHeading>
              <div className="space-y-4">
                <AboutParagraph delay={0.1}>
                  <span itemProp="description">
                    I'm{" "}
                    <span className="font-semibold text-foreground">
                      Youssef Mohamed
                    </span>
                    , a Front-End Developer and Information Systems student at{" "}
                    <span className="font-semibold text-foreground">
                      Mansoura University
                    </span>{" "}
                    (3rd year). I'm passionate about building modern,
                    accessible, and high-performance web experiences with a
                    strong focus on UI/UX consistency and clean design systems.
                  </span>
                </AboutParagraph>
                <AboutParagraph delay={0.2}>
                  <span itemProp="description">
                    I've worked on{" "}
                    <span className="font-semibold text-foreground">
                      30+ real freelance projects
                    </span>
                    , creating responsive and interactive websites using
                    Next.js, React, Tailwind CSS, and shadcn/ui — always aiming
                    for smooth, elegant user experiences.
                  </span>
                </AboutParagraph>
                <AboutParagraph delay={0.3}>
                  <span itemProp="description">
                    Beyond development, I create{" "}
                    <span className="font-semibold text-foreground">
                      content and vlogs
                    </span>{" "}
                    about my daily life as a developer and student — sharing
                    productivity habits, tech insights, and growth in the web
                    industry.
                  </span>
                </AboutParagraph>
                <AboutParagraph delay={0.4}>
                  <span itemProp="description">
                    Recently, I've been exploring how to merge{" "}
                    <span className="font-semibold text-foreground">
                      AI, automation, and web development
                    </span>{" "}
                    to build smart, scalable platforms tailored to real-world
                    needs. I'm passionate about using tools like n8n and modern
                    AI APIs to make technology work more efficiently for people
                    and businesses.
                  </span>
                </AboutParagraph>
              </div>

              <AboutButtons>
                <Button className="gap-2" aria-label="Download CV" asChild>
                  <a
                    href="/resume.pdf"
                    download="Youssef_Mohammed_CV.pdf"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    itemProp="contentUrl"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download CV</span>
                  </a>
                </Button>
                <Link
                  href="https://github.com/YoussefMohammed93"
                  target="_blank"
                  rel="noopener noreferrer me external"
                  passHref
                  aria-label="GitHub Profile"
                  itemProp="sameAs"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="GitHub Profile"
                    className="focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/youssef-mohammed-6893a031b"
                  target="_blank"
                  rel="noopener noreferrer me external"
                  passHref
                  aria-label="LinkedIn Profile"
                  itemProp="sameAs"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="LinkedIn Profile"
                    className="focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61552702670893"
                  target="_blank"
                  rel="noopener noreferrer me external"
                  passHref
                  aria-label="Facebook Profile"
                  itemProp="sameAs"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Facebook Profile"
                    className="focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
              </AboutButtons>
            </div>
          </AboutSectionClient>
        </div>
      </section>
    </>
  );
}
