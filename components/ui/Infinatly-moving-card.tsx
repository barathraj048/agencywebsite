"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import bgimg from "@/public/bg.png";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    projectType?: string;
    ProjectName?: string;
    Details?: string;
    TechnologyUsed?: string;
    Link?: string;
    img?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [click, setClick] = useState<boolean>(false);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "relative flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap z-30",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] max-w-full relative rounded-3xl border border-b-0 flex-shrink-0 px-4 pt-6 md:px-6 lg:px-8"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.projectType}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
                <img
                  src={bgimg.src}
                  alt="bgimg"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <span className="relative z-20 font-bold leading-[1.6] text-xl bg-gradient-to-r from-slate-500 to-blue-200 bg-clip-text text-transparent">
                {item.projectType}
              </span>
              <img
                src={item.img}
                alt={item.img}
                className="object-cover object-center pb-6 w-full h-40 md:h-48 lg:h-56 xl:h-64"
              />
              <span className="relative z-20 text-2xl leading-[1.6] text-gray-100 font-bold pt-4 bg-gradient-to-r from-slate-600 to-indigo-300 bg-clip-text text-transparent">
                {item.ProjectName}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center mb-8">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-bold mt-2 bg-gradient-to-r from-indigo-200 to-slate-500 bg-clip-text text-transparent">
                    {item.Details}
                  </span>
                  <span className="text-sm leading-[1.6] mt-4 font-bold bg-gradient-to-r from-purple to-indigo-300 bg-clip-text text-transparent">
                    Technology Used <br />
                    {item.TechnologyUsed}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.Link}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;

{
  /* // after item.ProjectName span */
}

//   <button className="text-md font-bold w-full mt-4 gap-2 flex items-center justify-center border border-gray-600 rounded-xl
//   hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50"
//   onClick={() => setClick(!click)}
// >
//   <span className="my-2.5 bg-gradient-to-r from-slate-600 to-neutral-200 bg-clip-text text-transparent">
//     {click ? 'Show Less' : 'More Details'}
//   </span>

//   <ArrowForwardIcon className={`ml-2 text-lg ${click ? 'rotate-90' : 'rotate-0'}`} />
// </button>
