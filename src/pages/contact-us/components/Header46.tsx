"use client";

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Header46(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
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
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
      gsap.from(formRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-03" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="w-full max-w-lg mx-auto text-center space-y-4">
          <h1 ref={titleRef} className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl">
            Get In Touch
          </h1>
          <p ref={descRef} className="md:text-md">
            We'd love to hear from you. Fill out the form below and we'll
            respond shortly.
          </p>
          {props.success && props.success === "true" ?
            (
              <span className="text-green-500 text-lg font-semibold mt-4 p-4 rounded-lg">
                Thank you for your message! We will get back to you soon.
              </span>
            )
            :
            (<form ref={formRef} className="mx-auto grid w-full max-w-md grid-cols-1 gap-4 my-6"
              method="POST"
              action="/api/v1/forms/contactUs">
              <div className="grid w-full">
                <Label htmlFor="name" className="mb-2 text-start">
                  Name
                </Label>
                <Input type="text" id="name" className="rounded-lg" required name="name" />
              </div>
              <div className="grid w-full">
                <Label htmlFor="email" className="mb-2 text-start">
                  Email
                </Label>
                <Input type="email" id="email" className="rounded-lg" required name="email" />
              </div>
              <div className="grid w-full">
                <Label htmlFor="message" className="mb-2 text-start">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Type your message..."
                  name="message"
                  className="min-h-[11.25rem] overflow-auto rounded-lg"
                />
              </div>
              <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                <input type="checkbox" id="terms" required name="terms" />
                <Label htmlFor="terms" className="cursor-pointer">
                  I accept the Terms
                </Label>
              </div>
              <div className="text-center">
                <Button title="Submit" className="rounded-full w-full cursor-pointer
              hover:shadow-lg transition duration-300 ease-in-out">
                  Submit
                </Button>
              </div>
            </form>)}
        </div>
      </div>
    </section>
  );
}
