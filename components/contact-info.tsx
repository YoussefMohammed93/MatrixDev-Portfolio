"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Facebook } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="text-muted-foreground">
          Feel free to reach out to me through any of these channels. I&apos;ll
          get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-primary/10 p-2 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:youssefmohammed2093@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              youssefmohammed2093@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-primary/10 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-muted-foreground">Mansoura, Egypt</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
        <div className="flex gap-3">
          <div>
            <Link
              href="https://github.com/YoussefMohammed93"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="GitHub Profile"
                className={cn(
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/youssef-mohammed-6893a031b"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="LinkedIn Profile"
                className={cn(
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.facebook.com/profile.php?id=61552702670893"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="Facebook Profile"
                className={cn(
                  "",
                  "focus-visible:ring-2 focus-visible:ring-primary"
                )}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
