import { InfiniteClientCards } from "@/components/ui/InfiniteClientCards";

function ClientSection() {
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
    {
      clientName: "Venus Construction",
      logo: "/logos/venus.png",
      info: "Corporate identity design and digital portfolio showcase.",
    },
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
