"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Excellence</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Transforming Spaces with Innovative Shade Solutions
            </h1>
            <p className="md:text-md">
              Our recent project at the City Park showcased our ability to blend
              functionality with aesthetics. We faced unique challenges with
              space constraints and weather conditions, but our team delivered a
              stunning solution that exceeded expectations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="View" variant="secondary">
                View
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
