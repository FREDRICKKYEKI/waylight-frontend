"use client";

import { Button } from "@relume_io/relume-ui";
import { type FC, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import type { CardItem } from "../types";
import { sampleCards } from "../constans";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function FeatureSection(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.from(".blog-heading", {
        y: 90,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-heading",
          toggleActions: "restart none none none",
        }
      });
      // Animate section description
      gsap.from(".blog-desc", {
        y: 90,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-desc",
          toggleActions: "restart none none none",
        }
      });
      // Animate cards with stagger
      gsap.utils.toArray(".blog-card").forEach((card, i) => {
        gsap.from(card as Element, {
          x: 60,
          y: 40,
          opacity: 0,
          duration: 1.2,
          delay: i * 0.2,
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
  }, { scope: sectionRef });

  return (
    <section
      id="relume"
      ref={sectionRef}
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-03 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="blog-heading text-4xl leading-[1.2] md:text-5xl lg:text-6xl">
              {/* Discover the Unmatched Features of Our Car Shade Structures */}
              {props.title}
            </h2>
          </div>
          <div>
            <p className="blog-desc md:text-md">
              {props.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          {props.features.map((card: CardItem, index: number) => (
            <Card {...card} key={index} cardIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card: FC<CardItem & { cardIndex: number }> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  cardIndex,
  ...props
}) => {
  return (
    <div
      className="blog-card shadow-md w-full rounded-lg cursor-pointer
     bg-primary-04 p-6 md:p-8 lg:p-10 scale-100
    hover:shadow-lg hover:scale-105"
    >
      <div className="mb-6 md:mb-8">
        <img
          src={image}
          alt="Relume placeholder image"
          className="rounded-lg object-cover w-full h-48 md:h-60"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
        {title}
      </h3>
      <p>
        {description}
      </p>
      <div className="mt-6 flex items-center gap-4 md:mt-8">
        <Button iconRight={<RxChevronRight />} variant="link" size="link" className="flex" >
          <a href={ctaLink} className="hover:underline hover:bg-secondary-03 p-2 rounded-lg">{ctaText}</a>
        </Button>
      </div>
    </div>
  )
}