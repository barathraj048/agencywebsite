"use client";
import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Magicbutton: React.FC = () => {
  const [hover, sethover] = useState<boolean>(false);

  const scrollTo = () => {
    scroll.scrollTo(700);
  };

  return (
    <button
      onClick={scrollTo}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      className="transition ease-in-out delay-150 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="transition ease-in-out delay-150 absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className="transition ease-in-out delay-150 duration-500 hover:bg-gradient-custom2 inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 text-sm font-medium text-white text-opacity-70 backdrop-blur-3xl bg-gradient-custom px-8 py-4 rounded-xl gap-4
      md:px-8 md:py-4  md:text-base"
      >
        See More About Us{" "}
        <ArrowForwardIcon
          className={`transition ease-in-out delay-50 duration-50 ${
            hover ? "rotate-90" : "rotate-0"
          }`}
        />
      </span>
    </button>
  );
};

export default Magicbutton;
