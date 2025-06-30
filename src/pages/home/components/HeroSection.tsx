import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type FC, type PropsWithChildren } from "react";

gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook

export function HeroSection(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".hero-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      // Animate paragraph
      gsap.from(".hero-desc", {
        y: 20,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      // Animate buttons
      gsap.from(".hero-btn", {
        y: 20,
        opacity: 1,
        duration: .5,
        delay: 0.4,
        ease: "power3.out",
        stagger: 0.2,
      });
      // Animate image
      gsap.from(".hero-img", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    // <section id="section__hero" ref={sectionRef} className="px-[5%] py-4 md:py-16 text-dark-01 h-dvh overflow-hidden">
    //   <div className="container mx-auto">
    //     <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
    //       <div>
    //         <h1 className="hero-heading mb-5 text-3xl md:mb-6 md:text-6xl">
    //           {props.heading}
    //         </h1>
    //         <p className="hero-desc md:text-md">
    //           {props.subheading}
    //         </p>
    //         <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
    //           <CTAButton className="hero-btn opacity-0" href={props.ctaPrimaryLink}>
    //             {props.ctaPrimary}
    //           </CTAButton>
    //           <a href={props.ctaSecondaryLink}
    //             className="opacity-0 hero-btn shadow-lg rounded-full border border-primary-01 p-2 px-3 cursor-pointer
    //           font-semibold hover:bg-primary-03 hover:scale-105 transition-all duration-200 ease-in-out">
    //             {props.ctaSecondary}
    //           </a>
    //         </div>
    //       </div>
    //       <div className="flex justify-end">
    //         <img
    //           src={props.image}
    //           className="hero-img w-full rounded-image object-cover rounded-2xl"
    //           alt="hero image"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // new hero section with image in the background
    <section id="section__hero" ref={sectionRef} className={`relative text-white h-dvh overflow-hidden
       bg-cover bg-center`}
      style={{ backgroundImage: `url(${props.image})` }}>

      <div className="h-full bg-dark-01/50 px-[5%] py-4  flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:items-center">
            <div className="container mx-auto flex flex-col items-start justify-center text-center">
              <h1 className="hero-heading mb-5 text-3xl md:mb-6 md:text-6xl">
                {props.heading}
              </h1>
              <p className="hero-desc md:text-md max-w-4xl text-wrap mx-auto">
                {props.subheading}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-center w-full">
                <CTAButton className="hero-btn opacity-0" href={props.ctaPrimaryLink}>
                  {props.ctaPrimary}
                </CTAButton>
                <a href={props.ctaSecondaryLink}
                  className="opacity-0 hero-btn shadow-lg rounded-full border border-primary-01 p-2 px-3 cursor-pointer
                 font-semibold hover:bg-primary-03 hover:text-primary-01 hover:scale-105 transition-all duration-200 ease-in-out">
                  {props.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: "primary" | "secondary";
}
export const CTAButton: FC<PropsWithChildren<CTAButtonProps>> = ({ children, ...props }) => {
  return (
    <a {...props}
      className={`bg-primary-01 rounded-full p-2 px-3  cursor-pointer font-semibold shadow-lg ${props.className}
    hover:bg-primary-02 hover:scale-110 transition-all duration-200 ease-in-out`}>
      {children}
    </a>
  );
}