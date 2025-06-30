"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

export function Contact21(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const cards = cardRefs.map(ref => ref.current).filter(Boolean);
    if (cards.length) {
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    }
  }, []);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 text-white bg-dark-01" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-8 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-start text-center" ref={cardRefs[0]}>
            <div className="mb-5 sm:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Get in touch with us for any inquiries.
            </p>
            <a className="underline" href={`mailto:${props.contacts.email}`}>
              {props.contacts.email}
            </a>
          </div>
          {/* <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 sm:mb-6">
              <BiMessageDetail className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Live chat
            </h3>
            <p className="mb-5 md:mb-6">
              Chat with our team for immediate assistance.
            </p>
            <a className="underline" href="#">
              Start chat now
            </a>
          </div> */}
          <div className="flex flex-col items-center justify-start text-center" ref={cardRefs[1]}>
            <div className="mb-5 sm:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us for quick support and information.
            </p>
            <a className="underline" href={`tel:${props.contacts.phone}`}>
              {props.contacts.phone}
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center" ref={cardRefs[2]}>
            <div className="mb-5 sm:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl leading-[1.4] font-bold sm:mb-4 md:text-3xl lg:mb-4 lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              Visit us at our headquarters for consultations.
            </p>
            <p className="underline">
              {props.contacts.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
