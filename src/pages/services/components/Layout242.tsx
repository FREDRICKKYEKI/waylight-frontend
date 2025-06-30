"use client";

import { Button } from "@relume_io/relume-ui";
import React, { type FC, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const dummyServiceData = [
  {
    info: "installation",
    title: "Expert Installation and Design Tailored to Your Unique Requirements",
    description: "Our services ensure your vehicles stay protected from the elements.",
    buttonText: "Learn More",
  }
  ,
  {
    info: "quality",
    title: "Durable and Stylish Shade Structures for Residential and Commercial Use",
    description: "Choose from a variety of designs to enhance your property's appeal.",
    buttonText: "Learn More",
  },
  {
    info: "customization",
    title: "Customizable Options to Fit Your Specific Shade and Design Preferences",
    description: "We work closely with you to create the perfect shade solution.",
    buttonText: "Learn More",
  },
]

export function Layout242(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card as Element, {
          x: 100,
          // y: 40,
          opacity: 0,
          duration: 1.2,
          // stagger: 0.2,
          delay: (i + 1) * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 90%",
            toggleActions: "restart none none none",
          },
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="section__services_cards overflow-hidden" className="px-[5%] py-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {props.cards.map((cards: any, i: number) => (
              <ServiceCard key={i} {...cards} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
export const ServiceCard: FC<ServiceCardProps> = (props) => {
  return (
    <div className="service-card flex flex-col items-start bg-primary-04 text-dark-01 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-primary-01/20">
      <h3 className="mb-5 text-2xl font-bold md:mb-6 ">
        {props.title}
      </h3>
      <p className="mb-5 md:mb-6 text-dark-02">
        {props.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
        <a href={props.buttonLink} className="inline-block px-5 py-2 rounded-full bg-primary-01 text-white font-semibold shadow hover:bg-primary-02 transition">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}