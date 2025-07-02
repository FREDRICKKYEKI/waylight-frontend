import { PortableText } from '@portabletext/react';
import { Button } from '@relume_io/relume-ui';
import React, { useRef } from 'react'
import { RxChevronRight } from "react-icons/rx";


export const MiniAboutSection = (props: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <section id="section__miniabout"
      className="px-[5%] py-4 md:py-16 text-dark-01 overflow-hidden"
      ref={sectionRef}>
      <div className="relative h-dvh overflow-hidden flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p ref={subtitleRef} className="mb-3 font-semibold md:mb-4">{props.label}</p>
              <h1 ref={titleRef} className="rb-5 mb-5 text-5xl font-bold md:mb-6 ">
                {props.title}
              </h1>
              <p ref={descRef} className="md:text-md">
                {/* {props.description} */}
                <PortableText value={props.description} />
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
      </div>
    </section>
  )
}
