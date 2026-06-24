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
        "scroller relative z-20 mx-auto w-full max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-6 md:gap-6 md:py-10",
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
                "group relative h-[100px] w-[150px] sm:h-[120px] sm:w-[200px] md:h-[150px] md:w-[250px]",
                "flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl",
                "border border-[#1F223C] bg-[#0C0E23]/60 backdrop-blur-sm",
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
                  "absolute inset-0 z-50 flex flex-col items-center justify-center rounded-2xl p-3 text-center md:p-5",
                  "transition-all duration-300 ease-out",
                  "border border-white/10 bg-[#0C0E23]/85 backdrop-blur-xl",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]",
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0",
                )}
              >
                <h3 className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-sm font-bold text-transparent drop-shadow-sm md:text-lg">
                  {item.clientName}
                </h3>
                <p className="mt-1 hidden text-[10px] leading-relaxed text-gray-300 drop-shadow-sm sm:block md:mt-2 md:text-xs line-clamp-3">
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

export default function ClientSection() {
  const clients = [
    {
      clientName: "TVK Election Campaign (2026)",
      logo: "/logos/tvk.jpg",
      info: "Complete video production and strategic social media management for the Pollachi region.",
    },
    {
      clientName: "INRC",
      logo: "/logos/inrc.png",
      info: "Comprehensive event coverage and media production.",
    },
    {
      clientName: "Coimbatore Auto Sports Club",
      logo: "/logos/casc.png",
      info: "Digital media and branding partner for regional motorsports events.",
    },
    {
      clientName: "Pollachi Motorable Club (PMC)",
      logo: "/logos/pmc.jpg",
      info: "Creative media production and digital presence enhancement.",
    },
    {
      clientName: "SriVaru Motors",
      logo: "/logos/srivaru.png",
      info: "End-to-end media coverage and marketing for their Grand Product Launch Event.",
    },
    {
      clientName: "High Key Restobar",
      logo: "/logos/highkey.png",
      info: "Social media marketing and visually engaging content creation.",
    },
    {
      clientName: "Planeta",
      logo: "/logos/planeta.jpg",
      info: "Digital branding and promotional campaign management.",
    },
    {
      clientName: "Keerthana Mess",
      logo: "/logos/keerthana.jpg",
      info: "Local business branding, photography, and social media outreach.",
    },
    // REMOVED: Venus Construction because venus.png does not exist in your public folder.
    {
      clientName: "Value Plus",
      logo: "/logos/valueplus.jpeg",
      info: "Strategic digital marketing and brand positioning.",
    },
    {
      clientName: "Brahma Tours and Travels",
      logo: "/logos/brahma.jpeg",
      info: "Travel package promotions and creative content management.",
    },
    {
      clientName: "Midland Residency",
      logo: "/logos/midland.jpg",
      info: "Hospitality marketing and premium visual branding.",
    },
    {
      clientName: "Evara Resort",
      logo: "/logos/evara.jpg",
      info: "Premium resort videography and social media engagement.",
    },
  ];

  return (
    <div className="mx-auto my-8 flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#313237] px-4 py-12 antialiased dark:bg-[#0C0E23] md:px-8 md:py-16">
      <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Trusted by <span className="text-[#CBACF9]">innovative brands</span>
      </h2>

      <p className="mb-10 max-w-2xl px-4 text-center text-sm text-gray-400 md:text-base">
        Click or hold on any client logo to view more details about our
        partnership and deliverables.
      </p>

      {/* Infinite Scrolling Component */}
      <InfiniteClientCards
        items={clients}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}
