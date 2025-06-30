

import { MdCheckCircle } from "react-icons/md";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Layout10(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".layout10-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".layout10-title",
          toggleActions: "restart none none none",
        },
      });
      gsap.from(".layout10-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "restart none none none",
        },
      });
      gsap.from(".layout10-img", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "restart none none none",
        },
      });
      gsap.utils.toArray(".layout10-feature").forEach((el, i) => {
        gsap.from(el as Element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.5 + i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: "restart none none none",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="durable" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-03 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="lg:flex lg:flex-col lg:items-end">
            <p className="mb-3 font-semibold md:mb-4 w-full text-start">Quality</p>
            <h1 className="layout10-title rb-5 mb-5 text-5xl md:mb-6 md:text-4xl">
              {props.title}
            </h1>
            <p className="layout10-desc mb-6 md:mb-8 md:text-md">
              {props.description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {props.subSections.map((subSection: any, index: number) => (
                <div className="layout10-feature" key={index}>
                  <div className="mb-3 md:mb-4">
                    <MdCheckCircle size={"32"} />
                  </div>
                  <h6 className="mb-3 text-md leading-[1.4] md:mb-4 md:text-xl">
                    {subSection.subTitle}
                  </h6>
                  <p>
                    {subSection.subDescription}
                  </p>
                </div>))}
              {/* <div className="layout10-feature">
                <div className="mb-3 md:mb-4">
                  <MdCheckCircle size={"32"} />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] md:mb-4 md:text-xl">
                  Sustainable Choices
                </h6>
                <p>
                  We prioritize eco-friendly materials that promote
                  sustainability without compromising quality.
                </p>
              </div> */}
            </div>
          </div>
          <div className="lg:flex lg:justify-end">
            <img
              src={props.image}
              className="layout10-img w-full lg:w-[80%] rounded-xl object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
