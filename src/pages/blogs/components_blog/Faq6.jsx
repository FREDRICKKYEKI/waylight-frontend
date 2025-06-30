"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl md:mb-6">FAQs</h2>
          <p className="md:text-md">
            Find answers to common questions about our car shade structures and
            installation services.
          </p>
          <div className="mt-6 md:mt-8">
            {/* <Button title="Contact" variant="secondary"> */}
            <a
              href="/contact-us"
              className="border-dark-01 text-text-primary hover:bg-dark-01 flex w-max items-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:text-white"
            >
              Contact Us
            </a>
            {/* </Button> */}
          </div>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <div>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="text-text-primary size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="md:text-md md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What are car shades?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Car shades are protective structures designed to shield vehicles
                from harsh weather conditions. They help prevent sun damage,
                rain exposure, and other environmental factors that can harm
                your vehicle. Our shades are crafted from high-quality materials
                for durability and longevity.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="text-text-primary size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="md:text-md md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How are they installed?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Installation of car shades is typically handled by our
                professional team. We assess the site, provide necessary
                measurements, and securely install the structure. Our goal is to
                ensure a perfect fit and optimal protection for your vehicles.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="text-text-primary size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="md:text-md md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Are they customizable?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, our car shade structures can be customized to meet your
                specific needs. You can choose from various colors, sizes, and
                styles. This ensures that your shade not only protects your
                vehicle but also complements your property.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="text-text-primary size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="md:text-md md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What maintenance is required?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our car shades require minimal maintenance, primarily occasional
                cleaning to remove debris. Inspecting the structure periodically
                for any wear or damage is also recommended. This helps maintain
                its appearance and functionality over time.
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <RxPlus className="text-text-primary size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="md:text-md md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is the warranty?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                We offer a warranty on our car shade structures, covering
                defects in materials and workmanship. The warranty period varies
                based on the product. Please contact us for specific details
                regarding warranty coverage.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
