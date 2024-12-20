import React from "react";
import { Spotlight } from "./ui/Sportlight"; // Adjust import path as needed
import TextGenerateEffect from "@/components/ui/TextgenerateEffect"; // Adjust import path as needed
import MagicButton from "./ui/Magicbutton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  return (
    <div id="hero">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.08] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="ibm-plex-mono-light flex flex-col items-center justify-center text-center px-4">
          {/* Small adjustments for mobile screens */}
          <div>
            <h2 className="uppercase text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center">
              Offering the experience{" "}
              <span className="inline text-purple">. not service</span>
            </h2>
          </div>
          <div className="my-4 md:mt-6 mt-6 lg:mt-8">
            <TextGenerateEffect
              words="Maximize Your Sales by Powerful Online Presence through Us"
              className="text-lg sm:text-sm md:text-3xl lg:text-5xl"
            />
          </div>
          <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-8">
            <h3 className="ibm-plex-mono-bold text-xs sm:text-sm md:text-base lg:text-lg uppercase text-[#535562]">
              Offers based on your true need!!!
            </h3>
          </div>
          <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-8">
            <MagicButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
