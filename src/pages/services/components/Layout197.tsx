import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Layout197(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".layout197-img", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".layout197-img",
          toggleActions: "restart none none none",
        },
      });
      gsap.from(".layout197-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".layout197-title",
          toggleActions: "restart none none none",
        },
      });
      gsap.from(".layout197-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".layout197-desc",
          toggleActions: "restart none none none",
        },
      });
      gsap.utils.toArray(".layout197-feature").forEach((el, i) => {
        gsap.from(el as Element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.6 + i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el as Element,
            toggleActions: "restart none none none",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expert-installation" className="px-[5%] py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-5">
          <div className="order-2 md:order-1 lg:flex lg:justify-center">
            <img
              src={props.image}
              className="layout197-img w-full lg:w-[80%] rounded-xl object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2 lg:flex lg:flex-col lg:items-start lg:justify-center">
            <h3 className="layout197-title mb-5 text-3xl leading-[1.2] md:mb-6 md:text-4xl">
              {props.title}
            </h3>
            <p className="layout197-desc mb-6 md:mb-8 md:text-md">
              {props.description}
            </p>
            {/* <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {props.subSections.map((subSection: any, index: number) => (
                <div className="layout197-feature">
                  <h6 className="mb-3 text-md leading-[1.4] md:mb-4 md:text-xl">
                    {subSection.subTitle}
                  </h6>
                  <p>
                    {subSection.subDescription}
                  </p>
                </div>
              ))}
               <div className="layout197-feature">
                <h6 className="mb-3 text-md leading-[1.4] md:mb-4 md:text-xl">
                  Expert Consultation
                </h6>
                <p>
                  Our team of experts is here to guide you through every step of
                  the process.
                </p>
              </div> }
          </div> */}
          </div>
        </div>
      </div>
    </section >
  );
}
