"use client";
import { useState } from "react";
import { IoManSharp } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { leftLists, rightLists } from "./list";

export const BentoGrid = ({
  className,
  children,
  info,
}: {
  className?: string;
  children?: React.ReactNode;
  info?: any;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unnecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
  info,
  specalimg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  info?: any;
  specalimg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-100 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 transform hover:scale-105 ",
        className
      )}
      style={{
        // add these two
        // you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              // width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 op inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 transform hover:scale-95 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the GitHub 3d globe */}
          {id === 2 && (
            <div className="relative">
              <div className="flex flex-col space-y-2 mt-4">
                {info &&
                  info.map((item: any, index: any) => (
                    <span
                      className="bgcard lg:px-4 lg:py-2 px-3 py-1.5 top rounded-3xl"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
              </div>
              <GridGlobe />
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex lg:gap-2 w-fit absolute -right-3 lg:-right-2 overflow-hidden">
              {/* Left List */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 animate-left-marquee animate-left">
                {/* Map through leftLists with a key */}
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-6 sm:py-4 py-5 sm:gap-8 lg:px-3 sm:px-6 px-4 sm:mx-0 mx-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Right List */}
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-2 animate-right-marquee animate-right">
                {/* Map through rightLists with a key */}
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-6 sm:py-4 py-5 sm:gap-8 lg:px-3 sm:px-6 px-4 sm:mx-0 mx-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="-mt-5 relative">
              {/* button border magic from tailwind css buttons */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={100} width={200} />
              </div>

              <MagicButton
                title={"Click Me To Contact"}
                icon={<IoManSharp />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
