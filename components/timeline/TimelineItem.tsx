"use client";

import TimelineIcon from "./TimelineIcon";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { TimelineEvent } from "@/data/timelineData";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isInView: boolean;
}

export default function TimelineItem({
  event,
  index,
  isInView,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : isEven ? -30 : 30,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1,
        duration: 0.4,
      },
    },
  };

  const expandedVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        },
      },
    },
  };

  return (
    <div
      className={cn(
        "relative flex items-start mb-8 sm:mb-10 md:mb-12 last:mb-0 pb-2 px-0",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
        "flex-col w-full overflow-hidden"
      )}
    >
      <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0 timeline-connector" />
      <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-10 timeline-icon">
        <TimelineIcon
          type={event.type}
          color={event.color}
          isInView={isMounted && isInView}
          customIcon={event.icon}
        />
      </div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isMounted && isInView ? "visible" : "hidden"}
        className={cn(
          "max-w-fit w-full md:w-[calc(50%-2rem)] ml-10 sm:ml-14 md:ml-0 md:mr-0 border rounded-lg dark:border-none",
          isEven ? "md:mr-8" : "md:ml-8",
          "relative z-10 timeline-item-content"
        )}
      >
        <Card className="max-w-fit overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-300 w-full">
          <CardContent className="p-2 xs:p-3 sm:p-4 md:p-5">
            <motion.div variants={contentVariants}>
              <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                {event.startDate} - {event.endDate}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 break-words">
                {event.title}
              </h3>
              <h4 className="text-base sm:text-lg text-primary mb-1 sm:mb-2 break-words">
                {event.subtitle}
              </h4>
              {event.location && (
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                  <span className="break-words">{event.location}</span>
                </div>
              )}
              <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4 break-words">
                {event.description}
              </p>
              {event.skills && event.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 w-full">
                  {event.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="font-inter text-xs sm:text-sm py-0.5 px-2 break-words"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
              {event.achievements && event.achievements.length > 0 && (
                <div className="w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="font-inter text-xs sm:text-sm"
                  >
                    {isExpanded ? "Hide achievements" : "Show achievements"}
                  </Button>
                  <motion.div
                    variants={expandedVariants}
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    className="overflow-hidden"
                  >
                    <ul className="list-disc list-inside mt-2 sm:mt-3 space-y-1 text-xs sm:text-sm text-foreground/80">
                      {event.achievements.map((achievement, i) => (
                        <li key={i} className="break-words pl-1 text-wrap">
                          <span className="inline-block">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )}
              {event.url && (
                <div className="mt-3 sm:mt-4 w-full">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-inter break-words"
                  >
                    Visit website{" "}
                    <ExternalLink className="ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                  </a>
                </div>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
