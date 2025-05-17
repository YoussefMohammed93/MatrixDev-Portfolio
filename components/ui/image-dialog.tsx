"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  allImages?: string[];
  onNavigate?: (newSrc: string) => void;
}

export function ImageDialog({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  allImages = [],
  onNavigate,
}: ImageDialogProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      }

      if (allImages.length > 1 && onNavigate) {
        const currentIndex = allImages.indexOf(imageSrc);

        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          const nextIndex = (currentIndex + 1) % allImages.length;
          onNavigate(allImages[nextIndex]);
        }

        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          const prevIndex =
            (currentIndex - 1 + allImages.length) % allImages.length;
          onNavigate(allImages[prevIndex]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, imageSrc, allImages, onNavigate]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          onClick={onClose}
          style={{ touchAction: "none" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl w-full h-auto max-h-[85vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <div
                className="relative w-full h-full"
                style={{ minHeight: "60vh" }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
              </div>
              {allImages && allImages.length > 1 && onNavigate && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = allImages.indexOf(imageSrc);
                      const prevIndex =
                        (currentIndex - 1 + allImages.length) %
                        allImages.length;
                      onNavigate(allImages[prevIndex]);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/70 hover:bg-background/90 backdrop-blur-sm text-foreground transition-colors z-20"
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = allImages.indexOf(imageSrc);
                      const nextIndex = (currentIndex + 1) % allImages.length;
                      onNavigate(allImages[nextIndex]);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/70 hover:bg-background/90 backdrop-blur-sm text-foreground transition-colors z-20"
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-3 right-5 p-2 rounded-full bg-background/70 hover:bg-background/90 backdrop-blur-sm text-foreground transition-colors z-20"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
              {allImages && allImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm text-foreground font-medium">
                  {allImages.indexOf(imageSrc) + 1} / {allImages.length}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
