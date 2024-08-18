import InfiniteMovingCards from "@/components/ui/Infinatly-moving-card";

function Prevname() {
  const product = [
    {
      projectType: "Web site",
      ProjectName: "VKM -Travels",
      Details:
        "This is real World Web-site that build for Vtk-Travels By Our Team. Before Production Our Team conducted an research as a result competators website look outdated so we empowerd morden 3d parallax effect that Capture Attention of visiters",
      TechnologyUsed: "React,Tailwind,node,express & More",
      img: "/vtk.png",
      Link: "",
      className: "",
    },
    {
      projectType: "Web Site",
      ProjectName: "Apple’s IPhone-15 Landing Page",
      Details:
        "our exact replica of the iPhone 15 landing page project! This showcases our team's exceptional development skills and our capability to create millions of doller landing page. Partner with us to achieve stunning, high-performance web pages that drive engagement ",
      TechnologyUsed: "React,Tailwind,three,gsap & More",
      img: "/iphonecard.png",
      Link: "",
      className: "",
    },
    {
      projectType: "Web Application",
      ProjectName: "Airbnb Model site  (E-Commerce)",
      Details:
        'To Expand,show & Test Our Technical Team,Our team made a simple prototype model of another million doller Web-Application that have really complex backend-task and integration of multiple Api"s.Simply more Complex E-commerse Mordel',
      TechnologyUsed: "React,Tailwind,node,express,cors & More",
      img: "/airbnb (2).png",
      Link: "",
      className: "",
    },
  ];
  return (
    <div
      id="Recent-projects"
      className="h-fit  flex flex-col antialiased bg-[#313237] dark:bg-[#0C0E23] mb-8 mt-8 rounded-3xl items-center justify-center "
    >
      <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl inline-flex ibm-plex-mono-bold gap-4 mt-10 sm:mt-16 md:mt-20 lg:mt-24 rounded-3xl whitespace-nowrap">
        A small selection of
        <p className="text-[#CBACF9] text-2xl sm:text-2xl md:text-4xl lg:text-5xl inline">
          recent projects
        </p>
      </h1>

      <InfiniteMovingCards
        items={product}
        direction="right"
        speed="slow"
        className="rounded-3xl mt-8 -mb-4"
      />
    </div>
  );
}

export default Prevname;
