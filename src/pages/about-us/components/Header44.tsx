import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Header44(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(subtitleRef.current, {
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
      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
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
    <section id="section__header" className="relative md:py-24 lg:py-28 text-white overflow-hidden" ref={sectionRef}>
      <div className="relative z-10 container px-[5%] mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <p ref={subtitleRef} className="mb-3 font-semibold md:mb-4">{props.label}</p>
          <h1 ref={titleRef} className="mb-5 text-5xl md:mb-6 md:text-6xl">
            {props.title}
          </h1>
          <p ref={descRef} className="md:text-md mb-12 lg:mb-2">
            {props.description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={props.image}
          className="w-full h-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-01/80 to-dark-01" />
        <div className="absolute bottom-0 w-full shape-1 bottom h-10 lg:h-10" style={{ overflow: "hidden" }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
