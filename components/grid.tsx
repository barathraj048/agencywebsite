import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";
import { gridItems } from "@/data/index";

const Grid: React.FC = () => {
  const items = gridItems;

  return (
    <section id="about">
      <BentoGrid>
        {items.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            info={item.info}
            description={item.description}
            className={item.className}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
