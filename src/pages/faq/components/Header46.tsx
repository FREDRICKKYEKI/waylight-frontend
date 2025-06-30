"use client";

import React from "react";

export function Header46(props: any) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-dark-04">
      <div className="container mx-auto">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl md:mb-6">
            {props.title}
          </h1>
          <p className="md:text-md">
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
}
