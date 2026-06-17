"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Logo3DCard } from "./Logo3DCard";

export const InfiniteClientCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    clientName: string;
    logo: string;
    info: string;
    website?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [activeClient, setActiveClient] = useState<string | null>(null);

  useEffect(() => {
    getDirection();
    getSpeed();
    setStart(true);
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed],
      );
    }
  };

  const duplicatedItems = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-full z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 md:gap-6 py-6 md:py-10 w-max flex-nowrap z-30",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {duplicatedItems.map((item, idx) => {
          const key = `${item.clientName}-${idx}`;
          const isActive = activeClient === key;

          return (
            <li
              key={key}
              onClick={() => setActiveClient(isActive ? null : key)}
              onMouseLeave={() => setActiveClient(null)}
              className={cn(
                "group relative w-[150px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[250px] md:h-[150px]",
                "flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden",
                "bg-[#0C0E23]/60 border border-[#1F223C] backdrop-blur-sm",
                "transition-all duration-300",
                // Glow ring on hover
                "hover:border-blue-500/40 hover:shadow-[0_0_24px_4px_rgba(99,102,241,0.18)]",
              )}
            >
              {/* Three.js 3D Logo */}
              <Logo3DCard
                src={item.logo}
                alt={item.clientName}
                isActive={isActive}
              />

              {/* Info Overlay (click-activated) */}
              <div
                className={cn(
                  "absolute inset-0 z-50 flex flex-col items-center justify-center p-3 md:p-5 text-center rounded-2xl",
                  "transition-all duration-300 ease-out",
                  "bg-[#0C0E23]/85 backdrop-blur-xl border border-white/10",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]",
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none",
                )}
              >
                <h3 className="text-sm md:text-lg font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
                  {item.clientName}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-300 mt-1 md:mt-2 line-clamp-3 leading-relaxed hidden sm:block drop-shadow-sm">
                  {item.info}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
