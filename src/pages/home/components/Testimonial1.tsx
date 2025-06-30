import { type FC, useEffect, useRef } from "react";
import type { TestimonialType } from "../types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export const Testimonial1: FC<any> = (props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.from(".testimonial-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-heading",
          toggleActions: "restart none none none",
        }
      });
      // Animate Swiper on scroll
      gsap.from(".testimonial-swiper", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-swiper",
          toggleActions: "restart none none none",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      id="section__testimonial"
      ref={sectionRef}
      className="px-[5%] py-16 md:py-24 lg:py-28 flex flex-col"
    >
      <h3 className="testimonial-heading text-6xl text-center mb-9">{props.heading || "What our Clients are saying!"}</h3>
      <div className="testimonial-swiper relative lg:max-w-[1100px] lg:mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {props.testimonials.map((testimonial: TestimonialType) => (
            <SwiperSlide key={testimonial._id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button className="swiper-button-prev !text-dark-01 backdrop-blur-sm p-2">
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button className="swiper-button-next !text-dark-01 backdrop-blur-sm p-2">
          </button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-6 md:mb-8">
        <img
          src={testimonial.image}
          alt="Testimonial avatar"
          className="size-16 min-h-16 min-w-16 rounded-full object-cover"
        />
      </div>
      <blockquote className="text-xl font-bold md:text-2xl">
        "{testimonial.text}"
      </blockquote>
      <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
        <p className="font-semibold">{testimonial.name}</p>
        <p>{testimonial.company}</p>
      </div>
    </div>
  );
};
