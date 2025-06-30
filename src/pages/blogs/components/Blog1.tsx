"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Blog1(props: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      if (headerRef.current) {
        const headerEls = headerRef.current.querySelectorAll("p, h1");
        gsap.from(headerEls, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "restart none none none",
          },
        });
      }
      // Animate blog cards
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll(".blog-card");
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="section__header"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-04"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="md:mb-18 mb-12 lg:mb-20" ref={headerRef}>
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">
              {props.label}
            </p>
            <h1 className="lg:text-10xl mb-5 text-6xl font-bold md:mb-6">
              {props.title}
            </h1>
            <p className="md:text-md">
              {props.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          {/* <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            ...category buttons...
          </div> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {props.blogs.map((blog: any, index: number) => (
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                publishedAt={blog.publishedAt}
                // random read time for now
                readTime={`${Math.floor(Math.random() * 6) + 1} min read`}
                category={blog.category}
                mainImage={blog.mainImage}
                slug={blog.slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export const BlogCard = ({
  title,
  description,
  author,
  publishedAt,
  readTime,
  category,
  mainImage,
  slug
}: {
  title: string;
  description: string;
  author: {
    name: string;
    profileImage: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  mainImage: string;
  slug: string;
}) => {
  return (<div className="blog-card">
    <a href={`/blogs/${slug}`}
      className="mb-6 inline-block w-full max-w-full">
      <div className="w-full overflow-hidden">
        <img
          src={mainImage}
          alt="Relume placeholder image 1"
          className="rounded-image aspect-[3/2] size-full object-cover"
        />
      </div>
    </a>
    <a
      href="#"
      className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
    >
      {category}
    </a>
    <a href="#" className="mb-2 block max-w-full">
      <h5 className="text-xl font-bold md:text-2xl">
        {title}
      </h5>
    </a>
    <p>
      {description}
    </p>
    <div className="mt-6 flex items-center">
      <div className="mr-4 shrink-0">
        <img
          src={author.profileImage || "https://via.placeholder.com/48"}
          alt="Relume placeholder avatar 1"
          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
        />
      </div>
      <div className="blog-card">
        <h6 className="text-sm font-semibold">
          {author.name}
        </h6>
        <div className="flex items-center">
          <p className="text-sm">
            {new Date(publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <span className="mx-2">•</span>
          <p className="text-sm">
            {readTime}
          </p>
        </div>
      </div>
    </div>
  </div>)
}