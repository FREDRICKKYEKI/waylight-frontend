"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto max-w-3xl">
        <h2 className="rb-5 mb-5 text-5xl md:mb-6">
          Get Your Custom Quote Today
        </h2>
        <p className="md:text-md">
          Fill out the form below to receive a personalized quote for your
          car shade project.
        </p>
        <div className="mt-6 w-full  md:mt-8">
          <form className="flex flex-col gap-4"
            action={"api/v1/forms/getQuote"}
            method="POST">
            <div>
              <label htmlFor="fullName" className="block font-semibold mb-1">Full Name*</label>
              <input type="text" id="fullName" name="fullName" required className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">Phone Number*</label>
              <input type="tel" id="phone" name="phone" required className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email Address*</label>
              <input type="email" id="email" name="email" required className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label htmlFor="location" className="block font-semibold mb-1">Location / Site Address*</label>
              <textarea id="location" name="location" required className="w-full border px-4 py-2 rounded"></textarea>
            </div>

            <div>
              <label htmlFor="propertyType" className="block font-semibold mb-1">Type of Property</label>
              <select name="propertyType" id="propertyType" className="w-full border px-4 py-2 rounded">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Type of Shade Interested In</label>
              <div className="flex flex-col gap-2">
                <label><input type="checkbox" name="shadeType" value="Cantilever" /> Cantilever</label>
                <label><input type="checkbox" name="shadeType" value="Sail Shade" /> Sail Shade</label>
                <label><input type="checkbox" name="shadeType" value="Arch Shade" /> Arch Shade</label>
                <label><input type="checkbox" name="shadeType" value="Custom Design" /> Custom Design</label>
              </div>
            </div>

            <div>
              <label htmlFor="carCapacity" className="block font-semibold mb-1">Number of Cars to Cover*</label>
              <input type="number" id="carCapacity" name="carCapacity" required className="w-full border px-4 py-2 rounded" />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block font-semibold mb-1">Additional Information</label>
              <textarea id="additionalInfo" name="additionalInfo" className="w-full border px-4 py-2 rounded"></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Preferred Contact Method*</label>
              <div className="flex gap-4">
                <label><input type="radio" name="contactMethod" value="Phone" required defaultChecked /> Call</label>
                <label><input type="radio" name="contactMethod" value="WhatsApp" required /> WhatsApp</label>
                <label><input type="radio" name="contactMethod" value="Email" required /> Email</label>
              </div>
            </div>

            <Button title="Submit" type="submit" className="rounded-lg border-none mb-3 bg-primary-01 font-semibold cursor-pointer">Submit</Button>
          </form>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: `
                      <p className='text-xs'>
                        By clicking Sign Up you're confirming that you agree with our
                        <a href='#' className='underline'>Terms and Conditions</a>.
                      </p>`,
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}
