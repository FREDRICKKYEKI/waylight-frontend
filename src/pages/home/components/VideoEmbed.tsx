"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export const VideoEmbed = (props: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Animate left column (subtitle, heading, description)
    if (leftColRef.current) {
      const leftEls = leftColRef.current.querySelectorAll('p, h2');
      gsap.from(leftEls, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    }
    // Animate stats
    if (statsRef.current) {
      const statEls = statsRef.current.querySelectorAll('div');
      gsap.from(statEls, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });
    }
    // Animate video
    if (videoRef.current) {
      gsap.from(videoRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });
    }
  }, []);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-03 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div ref={leftColRef}>
            <p className="mb-3 font-semibold md:mb-4">Results</p>
            <h2 className="mb-5 text-5xl md:mb-6 md:text-5xl">
              {props.heading}
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              {props.description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2" ref={statsRef}>
              {props.stats.map((stat: any, index: number) => (
                <div key={index}>
                  <h3 className="mb-2 text-5xl">
                    {stat.value}
                  </h3>
                  <p>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a title="Learn More" href={props.ctaPrimaryLink}
                className="flex items-center gap-2 border border-dark-01 rounded-full p-2 px-3 cursor-pointer font-semibold shadow-lg
                hover:scale-105 transition-all duration-200 ease-in-out">
                {props.ctaPrimary}
              </a>
              <a
                href={props.ctaSecondaryLink}
                title="Get a Quote"
                className="flex items-center gap-2 cursor-pointer font-semibold hover:scale-105 transition-all duration-200 ease-in-out"
              >
                {props.ctaSecondary}
                <RxChevronRight className="size-5" />
              </a>
            </div>
          </div>
          <iframe
            ref={videoRef}
            // width="560"
            // height="315"
            className="w-full h-[400px] rounded-lg shadow-lg"
            src={props.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
