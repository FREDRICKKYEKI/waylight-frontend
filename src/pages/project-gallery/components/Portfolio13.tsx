"use client";


import { Badge, Button } from "@relume_io/relume-ui";
import React, { useRef, useEffect } from "react";
import { RxChevronRight } from "react-icons/rx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export function Portfolio13(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });
      gsap.utils.toArray(".project_card").forEach((card: any, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          delay: 0.2 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "restart none none none",
          },
        });
      })
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28" ref={sectionRef}>
      <div className="container mx-auto">
        <div ref={headerRef} className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">
            {props.label}
          </p>
          <h2 className="mb-5 text-5xl md:mb-6">
            {props.title}
          </h2>
          <p className="md:text-md">
            {props.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {props.projects.map((project: any, index: number) => (
            <ProjectCard
              key={index}
              ref={cardRefs[index]}
              {...project}
            />
          ))}

        </div>
      </div>
    </section>
  );
}


const ProjectCard = (cardData:
  {
    ref: React.RefObject<HTMLDivElement>;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  }
) => (
  <div ref={cardData.ref}
    className="project_card relative flex flex-col overflow-hidden rounded-lg border
    border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300
    cursor-pointer">
    <div>
      <a href="#">
        <img
          src={cardData.image}
          className="w-full object-cover rounded-t-lg h-56"
          alt="project image"
        />
      </a>
    </div>
    <div className="px-5 py-6 sm:px-6">
      <h3 className="mb-2 text-xl md:text-2xl">
        {cardData.title}
      </h3>
      <p>
        {cardData.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
        {cardData.tags.map((tag, index) => (
          <Badge key={index}>
            <a href="#">{tag}</a>
          </Badge>
        ))}
      </div>
    </div>
  </div>
)