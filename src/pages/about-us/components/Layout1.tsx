import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Layout1(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
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
        delay: 0.3,
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
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(imgRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.1,
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p ref={subtitleRef} className="mb-3 font-semibold md:mb-4">{props.label}</p>
            <h1 ref={titleRef} className="rb-5 mb-5 text-5xl font-bold md:mb-6 ">
              {props.title}
            </h1>
            <p ref={descRef} className="md:text-md">
              {props.description}
            </p>
            <div ref={btnRef} className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                title="Contact Us"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="bg-primary-01/10 hover:bg-secondary-01/10 hover:text-secondary-01 p-2 rounded-full
                 text-primary-01 font-semibold shadow-md hover:shadow-lg cursor-pointer
                  transition-all duration-200 ease-in-out"
              >
                <a href={props.buttonLink}>
                  {props.buttonText}
                </a>
              </Button>
            </div>
          </div>
          <div>
            <img
              ref={imgRef}
              src={props.image}
              className="w-full rounded-lg object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
