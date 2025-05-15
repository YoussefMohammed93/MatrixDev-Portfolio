import "./globals.css";
import type React from "react";
import type { Metadata, Viewport } from "next";

import Navigation from "@/components/navigation";

import { Ovo, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Load fonts with display swap for better performance
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

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://youssefmohammed.dev"),
  title: {
    template: "%s | Youssef Mohammed - Full-Stack Developer",
    default: "Youssef Mohammed | Full-Stack Developer Portfolio",
  },
  description:
    "Professional portfolio of Youssef Mohammed, a Full-Stack Developer specializing in React, Next.js, and React Native development with expertise in modern web technologies.",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youssefmohammed.dev",
    title: "Youssef Mohammed | Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing my skills and projects as a Full-Stack Developer specializing in React, Next.js, and React Native.",
    siteName: "Youssef Mohammed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Youssef Mohammed - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Mohammed | Full-Stack Developer",
    description:
      "Professional portfolio showcasing my skills and projects as a Full-Stack Developer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Viewport configuration for better mobile experience
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <head>
        {/* Preload critical resources */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        {/* Add structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Youssef Mohammed",
              url: "https://youssefmohammed.dev",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/youssefmohammed",
                "https://linkedin.com/in/youssefmohammed",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "React Native",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className="font-ovo">
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navigation />
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
