"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import weblogo from "@/public/webmain.jpg";

interface NavItem {
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems?: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is a number
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();

      // Ensure previous value is a number
      const direction = typeof previous === "number" ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        // Also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-fit md:min-w-fit rounded-md -mt-8 lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-2 py-1  border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Link href="/">
          <img
            src={weblogo.src}
            className="h-18 w-40 ml-2 my-1 rounded-md"
            alt="Icon"
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
