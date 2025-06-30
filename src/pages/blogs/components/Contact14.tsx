"use client";


import { Button } from "@relume_io/relume-ui";
import React, { useRef, useEffect } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Contact14(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const officeRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from([emailRef.current, phoneRef.current, officeRef.current], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(mapRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.5,
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
    <section id="section__map" className="px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div ref={headerRef} className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Contact</p>
          <h2 className="rb-5 mb-5 text-5xl md:mb-6 md:text-5xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            We’re here to assist you with your inquiries.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div ref={emailRef}>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] md:text-xl">
                Email
              </h3>
              <p className="mb-2">Reach us at:</p>
              <a className="underline" href={`mailto:${props.email}`}>
                {props.email}
              </a>
            </div>
            <div ref={phoneRef}>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call us at:</p>
              <a className="underline" href={`tel:${props.phone}`}>
                {props.phone}
              </a>
            </div>
            <div ref={officeRef}>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md leading-[1.4] md:text-xl">
                Office
              </h3>
              <p className="mb-2">
                Visit us at: {props.address}
              </p>
              <div className="mt-5 md:mt-6">
              </div>
            </div>
          </div>
          <div ref={mapRef} className="justify-self-center w-full">
            <iframe src={props.mapLink}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
