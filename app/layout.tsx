import "./globals.css";

import type React from "react";
import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import { ToasterProvider } from "@/components/providers/toaster-provider";

import { Ovo, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ovo",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Youssef Mohammed - Frontend Developer",
    default: "Youssef Mohammed | Frontend Developer Portfolio",
  },
  description:
    "Professional portfolio of Youssef Mohammed, a Frontend Developer specializing in React, Next.js, and React Native development with expertise in modern web technologies.",
  keywords: [
    "Youssef Mohammed",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Frontend Developer",
    "Web Development",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Youssef Mohammed" }],
  creator: "Youssef Mohammed",
  publisher: "Youssef Mohammed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ovo.variable} ${inter.variable}`}
    >
      <body className="font-ovo" suppressHydrationWarning>
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navigation />
          <main id="main-content">{children}</main>
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
