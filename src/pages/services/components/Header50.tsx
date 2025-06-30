import { Layout242 } from "./Layout242";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Header50(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header50-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(".header50-desc", {
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="section__header" className="w-full relative md:py-24 lg:py-28 text-white overflow-hidden" ref={sectionRef}>
      <div className="relative z-10 container px-[5%] mx-auto">
        <div className="flex flex-col items-center justify-center text-center" >
          <h1 className="header50-title text-6xl md:text-6xl p-6">
            {props.title}
          </h1>
          <div className="max-w-5xl">
            <p className="header50-desc md:text-md">
              {props.description}
            </p>
          </div>
        </div >
        <Layout242 {...props} />
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-01/80 to-dark-01" />
        <div className="absolute bottom-0 w-full h-5 lg:h-10" style={{ overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="" style={{ height: "100%", width: "100%" }}>
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" style={{ stroke: "none", fill: "#fff" }}></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
