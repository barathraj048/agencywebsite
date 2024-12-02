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
import weblogo from "@/public/logo.svg";
import { navbarItem } from "@/data/index";

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
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = typeof previous === "number" ? current - previous : 0;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-fit md:min-w-fit rounded-md -mt-8 lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-2 py-1 border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="mx-4 flex items-center justify-between min-w-full gap-48">
          <Link href="/">
            <img
              src={weblogo.src}
              className="h-18 w-40 ml-2 my-1 rounded-md"
              alt="Icon"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl pr-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            {navbarItem.map((item) => (
              <Link
                key={item.id}
                href={item.location}
                className={`nav-Item ${item.style}`}
              >
                {item.item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Popup Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-2 w-full rounded-md shadow-lg bg-opacity-90 lg:hidden"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {navbarItem.map((item) => (
                <Link
                  key={item.id}
                  href={item.location}
                  className={`nav-Item ${item.style}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
