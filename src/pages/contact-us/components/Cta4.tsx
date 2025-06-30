"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta4() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="text-text-alternative mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-text-alternative md:text-md">
            Join our newsletter for exclusive updates and special offers on our
            car shade solutions.
          </p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Your Email Address" />
              <Button title="Join Now">Join Now</Button>
            </form>
            <div
              dangerouslySetInnerHTML={{
                __html: `<p class='text-xs text-text-alternative'>
By clicking Sign Up you're confirming that you agree with our
        <a href='#' class='underline'>Terms and Conditions</a>.
      </p>
      `,
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
