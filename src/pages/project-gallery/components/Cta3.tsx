"use client";


import { Button } from "@relume_io/relume-ui";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function Cta3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(btnRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="relume" className="relative px-[5%] py-16  text-white" ref={sectionRef}>
      <div className="relative z-10 container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 ref={titleRef} className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 ">
            Get Your Custom Quote Today
          </h2>
          <p ref={descRef} className="text-text-alternative md:text-md">
            Transform your outdoor space with a tailored car shade structure
            designed just for you.
          </p>
          <div ref={btnRef} className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Quote" className="rounded-full shadow-md hover:shadow-lg cursor-pointer bg-dark-01 text-white hover:bg-dark-01/60">
              <a href="get-quote">
                Get Quote
              </a>
            </Button>
            {/* <Button title="Learn More" className="rounded-full shadow-md hover:shadow-lg cursor-pointer hover:bg-dark-01/60 hover:text-white">
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="assets/images/car_shade_01.png"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-dark-01/80" />
      </div>
    </section>
  );
}
