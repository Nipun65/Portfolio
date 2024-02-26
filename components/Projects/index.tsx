"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { constants } from "@/utilities";
import { Project } from "@/interfaces";
import Card from "../Card";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const projects = document.querySelector(".scroll-tag");

    function getScrollAmount() {
      let projectwidth = projects?.scrollWidth;
      if (projectwidth) return -(projectwidth - window.innerWidth + 165);
    }

    const tween = gsap.to(projects, {
      x: getScrollAmount as any,
      duration: 3,
      ease: "power1.out",
    });

    ScrollTrigger.create({
      trigger: ".projects-wrapper",
      start: "top 20%",
      end: () => `+=${(getScrollAmount?.() as any) * -1}`,
      pin: true,
      animation: tween,
      scrub: 0.4,
      invalidateOnRefresh: true,
    });
  });

  return (
    <section className="bg-gradient-to-b from-[#f377354d] to-[#8383FF] relative h-fit xs:p-4 md:p-6 lg:p-12">
      <h3 className="xs:text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#333333]">
        Projects
      </h3>
      <div className="p-12 projects-wrapper overflow-y-hidden overflow-x-hidden">
        <div className="flex gap-3 w-full flex-nowrap my-6 scroll-tag">
          {constants.PORTFOLIO.map((project: Project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
