import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Cta3(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta3-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta3-title",
          toggleActions: "restart none none none",
          start: "top 90%",
        },
      });
      gsap.from(".cta3-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta3-desc",
          toggleActions: "restart none none none",
          start: "top 90%",
        },
      });
      gsap.from(".cta3-btn", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta3-btn",
          toggleActions: "restart none none none",
          start: "top 90%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white" ref={sectionRef}>
      <div className="relative z-10 container mx-auto">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h2 className="cta3-title mb-5 text-5xl md:mb-6 md:text-6xl">
            {props.title}
          </h2>
          <p className="cta3-desc md:text-md">
            {props.description}
          </p>
          <div className="cta3-btn mt-6 flex flex-wrap gap-4 md:mt-8">
            <a href={props.ctaButtonLink}
              title="Get a Quote"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold
               text-white border border-white rounded-lg bg-dark-01 hover:bg-white hover:text-dark-01
               transition duration-300 ease-in-out shadow-lg shadow-dark-01/50 hover:shadow-dark-01/50"
            >
              {props.ctaButtonText}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        /> */}
        <div className="absolute inset-0 bg-dark-01" />
      </div>
    </section>
  );
}
