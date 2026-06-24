"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface UpcomingProject {
  title: string;
  category: string;
  status: string;
  description: string;
  image: string;
  large?: boolean;
}

const projects: UpcomingProject[] = [
  {
    title: "Untitled Feature Film",
    category: "Cinematic Production",
    status: "In Production",
    description:
      "A night-shoot thriller currently rolling through production. We're keeping the story under wraps — the trailer breaks cover soon.",
    image: "/projects/feature-film-set.png",
    large: true,
  },
  {
    title: "INRC Rally Championship",
    category: "Motorsport Coverage",
    status: "Filming Now",
    description:
      "Multi-camera coverage of rally stages cutting through misty mountain terrain, shot for broadcast and social.",
    image: "/projects/inrc-rally.png",
  },
  {
    title: "City Marathon Series",
    category: "Event Coverage",
    status: "Upcoming",
    description:
      "Dawn-to-finish coverage of a city-wide marathon — the sweat, the skyline, and the sprint to the line.",
    image: "/projects/city-marathon.png",
  },
  {
    title: "Adventure Ride Activation",
    category: "Brand Activation",
    status: "Coming Soon",
    description:
      "A full-scale brand film for an adventure-touring community ride, shot across hill roads at first light.",
    image: "/projects/bmw-adventure-ride.png",
    large: true,
  },
];

const ProjectCard = ({ project }: { project: UpcomingProject }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive((v) => !v)}
      onMouseLeave={() => setIsActive(false)}
      className={cn(
        "project-card group relative w-full overflow-hidden rounded-3xl border border-[#1F223C]",
        "bg-[#0C0E23]/60 text-left",
        "h-[280px] sm:h-[320px] md:h-[360px]",
        project.large && "md:col-span-2 md:h-[420px]",
        // Added smooth cubic-bezier transition to the card itself
        "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
        "hover:border-blue-500/30 hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.12)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50",
      )}
    >
      {/* Background image: Added intense blur and dimming on hover for MYSTERY */}
      <img
        src={project.image}
        alt={project.title}
        className={cn(
          "kenburns absolute inset-0 h-full w-full object-cover",
          "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]",
          "group-hover:blur-[6px] group-hover:brightness-50 group-hover:scale-105",
        )}
      />

      {/* Film-grain texture: Slightly increased opacity for a grittier, darker feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Brand-color wash: Deepened the gradient slightly */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70" />

      {/* Legibility gradient: Made bottom shadow richer for better text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0E23] via-[#0C0E23]/40 to-transparent" />

      {/* Signature Sweep: Moved all rotation into CSS to prevent jittering */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="sweep absolute -inset-y-full w-1/2 bg-gradient-to-r from-transparent via-blue-100/10 to-transparent blur-xl" />
      </div>

      {/* Status badge */}
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/5 bg-black/50 px-3 py-1 backdrop-blur-md transition-transform duration-500 group-hover:scale-95">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-300" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-200">
          {project.status}
        </span>
      </div>

      {/* Always-visible identity: Fades out slightly when the detail panel opens */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 p-4 md:p-6 transition-all duration-500",
          isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
        )}
      >
        <p className="text-[10px] font-medium uppercase tracking-widest text-blue-300/80 md:text-xs">
          {project.category}
        </p>
        <h3 className="mt-1 text-xl font-bold leading-tight text-transparent bg-gradient-to-r from-blue-100 to-purple-200 bg-clip-text drop-shadow-md md:text-3xl">
          {project.title}
        </h3>
      </div>

      {/* Click-revealed detail panel: Smoothed out the motion curve and added heavier backdrop-blur */}
      <div
        className={cn(
          "absolute inset-0 z-30 flex flex-col items-start justify-end rounded-3xl p-4 md:p-6",
          "border border-white/5 bg-[#0C0E23]/60 backdrop-blur-xl",
          "shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
          "transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
          isActive
            ? "opacity-100 translate-y-0"
            : "pointer-events-none translate-y-8 opacity-0",
        )}
      >
        <p className="text-[10px] font-medium uppercase tracking-widest text-blue-300/80 md:text-xs">
          {project.category}
        </p>
        <h3 className="mt-1 text-xl font-bold leading-tight text-transparent bg-gradient-to-r from-blue-100 to-purple-200 bg-clip-text drop-shadow-md md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-gray-300 md:text-sm">
          {project.description}
        </p>
      </div>

      <style jsx>{`
        /* Added hardware acceleration (translate3d) to stop the shuttering */
        .kenburns {
          animation: kenburns 18s ease-in-out infinite alternate;
          will-change: transform;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Note: Removed the animation-duration change on hover. 
           Instead, the Tailwind group-hover adds blur, which is smoother and moodier. */

        @keyframes kenburns {
          0% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
          100% {
            transform: scale(1.1) translate3d(0, 0, 0);
          }
        }

        .sweep {
          will-change: transform, opacity;
          backface-visibility: hidden;
          animation: sweep 7s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }

        @keyframes sweep {
          0% {
            transform: translateX(-150%) rotate(-20deg) translate3d(0, 0, 0);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          50% {
            transform: translateX(250%) rotate(-20deg) translate3d(0, 0, 0);
            opacity: 0;
          }
          100% {
            transform: translateX(250%) rotate(-20deg) translate3d(0, 0, 0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kenburns,
          .sweep {
            animation: none !important;
          }
        }
      `}</style>
    </button>
  );
};

function UpcomingProjectsSection() {
  return (
    <section className="relative mx-auto my-8 flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#131525] px-4 py-12 antialiased dark:bg-[#0C0E23] md:px-8 md:py-16">
      {/* Ambient atmosphere */}
      <div className="ambient-glow pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] md:h-96 md:w-96" />
      <div className="ambient-glow pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px] md:h-96 md:w-96" />

      <h2 className="relative z-10 text-center text-3xl font-bold sm:text-4xl md:text-5xl text-white">
        Stories <span className="text-blue-300">in Motion</span>
      </h2>

      <p className="relative z-10 mb-10 mt-4 max-w-2xl px-4 text-center text-sm text-gray-400 md:text-base">
        A look behind the lens — productions currently rolling, full reveals
        coming with launch.
      </p>

      <div className="relative z-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <style jsx>{`
        .ambient-glow {
          animation: glowpulse 8s ease-in-out infinite alternate;
        }
        @keyframes glowpulse {
          0% {
            opacity: 0.5;
            transform: scale(0.9) translate3d(0, 0, 0);
          }
          100% {
            opacity: 1;
            transform: scale(1.1) translate3d(0, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ambient-glow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default UpcomingProjectsSection;
