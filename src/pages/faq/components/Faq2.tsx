"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2(props: any) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6">
            {props.title}
          </h2>
          <p className="md:text-md">
            {props.description}
          </p>
        </div>
        <Accordion type="multiple" className="__accordion">
          {props.faqs.map((faq: any, index: number) => (
            <AccordionItem value={`item-${index}`} key={index}
              className="__accordion-item">
              <AccordionTrigger className="md:py-5 md:text-md">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
