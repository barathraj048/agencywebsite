import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6"; // Imported FaWhatsapp

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  let currentYear: number = new Date().getFullYear();

  const whatsappNumber = "9600945583";
  const whatsappMessage =
    "Hello! I'm interested in working with Ravan Creatives.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="./footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center px-4 z-10 relative">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to Us today and let&apos;s discuss how We can help you
          achieve your goals.
        </p>

        {/* ACTION BUTTONS: Placed side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Company Email Link */}
          <a href="mailto:contact@ravancreatives.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* WhatsApp Action Button */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="Chat on WhatsApp"
              icon={<FaWhatsapp className="text-xl text-[#25D366]" />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center mt-16 px-4 z-10 relative">
        {/* Copyright Text */}
        <p className="text-xs text-gray-600 font-light opacity-80 text-center md:text-left">
          Ravan Creatives (Design & Development)
        </p>

        {/* Year & Rights */}
        <p className="text-xs text-gray-600 -ml-20 font-light opacity-80 text-center md:text-left">
          © All rights reserved - {currentYear}
        </p>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-all"
            >
              <Link href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}

          {/* Standalone WhatsApp Icon in the Social Tray */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-all"
          >
            <FaWhatsapp className="text-xl text-[#25D366]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
