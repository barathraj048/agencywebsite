import InfiniteMovingCards from "@/components/ui/Infinatly-moving-card";

function Prevname() {
  const product = [
    {
      projectType: "Web site",
      ProjectName: "VKM -Travels",
      Details:
        "This is real World Web-site that build for Vtk-Travels By Our Team. Before Production Our Team conducted an research as a result competators website look outdated so we empowerd morden 3d parallax effect that Capture Attention of visiters",
      TechnologyUsed: "React,Tailwind,node,express & More",
      img: "./vtk.png",
      Link: "",
      className: "",
    },
    {
      projectType: "Web Site",
      ProjectName: "Apple’s IPhone-15 Landing Page",
      Details:
        "our exact replica of the iPhone 15 landing page project! This showcases our team's exceptional development skills and our capability to create millions of doller landing page. Partner with us to achieve stunning, high-performance web pages that drive engagement ",
      TechnologyUsed: "React,Tailwind,three,gsap & More",
      img: "./iphonecard.png",
      Link: "",
      className: "",
    },
    {
      projectType: "Web Application",
      ProjectName: "Airbnb Model site  (E-Commerce)",
      Details:
        'To Expand,show & Test Our Technical Team,Our team made a simple prototype model of another million doller Web-Application that have really complex backend-task and integration of multiple Api"s.Simply more Complex E-commerse Mordel',
      TechnologyUsed: "React,Tailwind,node,express,cors & More",
      img: "./airbnb (2).png",
      Link: "",
      className: "",
    },
    {
      projectType: "Short Filim",
      ProjectName: "Illution",
      Details:
        "A debut director’s first masterpiece is a reflection of their journey—a raw and passionate endeavor, crafted through sheer determination. With limited resources but boundless creativity, the director pushes the boundaries of storytelling to bring their vision to life, defying all odds.",
      TechnologyUsed:
        "Sony Alpha, Adobe Creative Cloud, DJI Ronin gimbal, and other essential equipment",
      img: "./illution.png",
      Link: "",
      className: "",
    },
    {
      projectType: "Filim Promotion",
      ProjectName: "Promotional Video For Coolie",
      Details:
        'To Expand,show & Test Our Technical Team,Our team made a simple prototype model of another million doller Web-Application that have really complex backend-task and integration of multiple Api"s.Simply more Complex E-commerse Mordel',
      TechnologyUsed: "React,Tailwind,node,express,cors & More",
      img: "./coolie.png",
      Link: "",
      className: "",
    },
  ];
  return (
    <div
      id="Recent-projects"
      className="overflow-hidden h-fit flex flex-col antialiased bg-[#313237] dark:bg-[#0C0E23] mb-4 sm:mb-6 mt-4 sm:mt-6 rounded-3xl items-center justify-center px-4"
    >
      <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl inline-flex ibm-plex-mono-bold gap-2 sm:gap-4 mt-6 sm:mt-10 md:mt-16 lg:mt-20 rounded-3xl whitespace-nowrap text-center">
        A small selection of
        <p className="text-[#CBACF9] text-sm sm:text-2xl md:text-4xl lg:text-5xl inline">
          recent projects
        </p>
      </h1>

      <InfiniteMovingCards
        items={product}
        direction="right"
        speed="slow"
        className="rounded-3xl mt-4 sm:mt-8 mb-2 sm:mb-4"
      />
    </div>
  );
}

export default Prevname;
