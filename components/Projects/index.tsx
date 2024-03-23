"use client";
import { useEffect } from "react";
import { constants } from "@/utilities";
import { Project } from "@/interfaces";
import Card from "../Card";

const Projects = () => {
  useEffect(() => {
    const stickySection = document?.querySelector(".sticky-div");
    const projects = document.querySelector(".scroll-content");
    const parentDiv = document.querySelector(".sticky-parent");

    if (parentDiv) {
      (parentDiv as HTMLElement).style.height = `${
        (projects as HTMLElement)?.scrollWidth -
        window.innerWidth +
        (window.innerWidth <= 500 ? 850 : 930)
      }px`;
    }

    const handleScroll = () => {
      if (stickySection) transform(stickySection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = (section: Element) => {
    if (section.parentElement) {
      const scrollSection = section.querySelector(".scroll-content");
      const headingElement = document.querySelector(".heading-h3");
      const headingOffsetTop = (headingElement as HTMLElement).offsetTop;
      const projects = document.querySelector(".scroll-content");
      let percentage = window.scrollY - headingOffsetTop;
      if (
        scrollSection &&
        percentage > -20 &&
        percentage <
          (projects as HTMLElement)?.scrollWidth -
            window.innerWidth +
            (window.innerWidth <= 500 ? 170 : 230)
      ) {
        (
          scrollSection as HTMLElement
        ).style.transform = `translate3d(${-percentage}px,0,0)`;
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f377354d] to-[#8383FF] xs:p-4 md:p-6 lg:p-12 sticky-parent">
      <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#333333] heading-h3">
        Projects
      </h3>
      <div className="p-12 sticky-div h-[0.9%] min-h-[17rem] my-6">
        <div className="flex scroll-content gap-3">
          {constants.PORTFOLIO.map((project: Project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
