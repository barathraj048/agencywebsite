import { InfiniteClientCards } from "@/components/ui/InfiniteClientCards";

function ClientSection() {
  const clients = [
    {
      clientName: "TVK Election Campaign (2026)",
      logo: "/logos/WhatsApp Image 2026-08-09 at 4.45.55 PM.jpeg",
      info: "Complete video production and strategic social media management for the Pollachi region.",
    },
    {
      clientName: "INRC",
      logo: "/logos/INRC.png",
      info: "Comprehensive event coverage and media production.",
    },
    {
      clientName: "Coimbatore Auto Sports Club",
      logo: "/logos/Coimbatore Auto Sports Club .png",
      info: "Digital media and branding partner for regional motorsports events.",
    },
    {
      clientName: "Pollachi Motorable Club (PMC)",
      logo: "/logos/PMC logo .png",
      info: "Creative media production and digital presence enhancement.",
    },
    {
      clientName: "High Key Restobar",
      logo: "/logos/High key Logo .png",
      info: "Social media marketing and visually engaging content creation.",
    },
    {
      clientName: "Planeta",
      logo: "/logos/Planeta Logo .png",
      info: "Digital branding and promotional campaign management.",
    },
    {
      clientName: "Keerthana Mess",
      logo: "/logos/Keerthana mess logo .png",
      info: "Local business branding, photography, and social media outreach.",
    },
    {
      clientName: "Brahma Tours and Travels",
      logo: "/logos/Brahma Tours and Travels .png",
      info: "Travel package promotions and creative content management.",
    },
    {
      clientName: "Midland Residency",
      logo: "/logos/Midland Residency .png",
      info: "Hospitality marketing and premium visual branding.",
    },
    {
      clientName: "Evara Resort",
      logo: "/logos/Evara Logo 16 9 .jpeg",
      info: "Premium resort videography and social media engagement.",
    },
  ];

  return (
    <div className="flex flex-col antialiased bg-[#313237] dark:bg-[#0C0E23] py-12 md:py-16 px-4 md:px-8 items-center justify-center rounded-3xl w-full max-w-7xl mx-auto my-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        Trusted by <span className="text-[#CBACF9]">innovative brands</span>
      </h2>

      <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mb-10 px-4">
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

export default ClientSection;
