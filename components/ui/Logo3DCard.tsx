"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Logo3DCardProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

export const Logo3DCard: React.FC<Logo3DCardProps> = ({
  src,
  alt,
  isActive,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center p-5",
        "[perspective:900px]",
      )}
      aria-label={alt}
    >
      {hasError ? (
        <span className="max-w-full text-center text-xs font-semibold leading-snug text-gray-300 md:text-sm">
          {alt}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className={cn(
            "max-h-[72%] max-w-[78%] object-contain",
            "transition duration-300 ease-out [transform-style:preserve-3d]",
            "drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)]",
            "group-hover:scale-110 group-hover:[transform:translateZ(42px)_rotateX(8deg)_rotateY(-10deg)]",
            isActive && "scale-100 opacity-40",
          )}
        />
      )}
    </div>
  );
};
