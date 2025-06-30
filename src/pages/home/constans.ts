import type { CardItem, MenuItem } from "./types";

export const CONSTANTS = {
  COMPANY_NAME: "WayLight Car Shade Solutions",
};

export const navMenuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  // { name: "Projects", href: "/projects" },
];

export const sampleCards: CardItem[] = [
  {
    title: "Built to Last: Exceptional Durability for All Environments",
    description:
      "Crafted from high-quality materials, our structures resist wear and tear.",
    imageSrc:
      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    linkText: "Learn More",
    linkUrl: "#",
  },
  {
    title: "Elevate Your Space with Our Stylish Shade Solutions",
    description:
      "Our designs seamlessly blend functionality with modern aesthetics.",
    imageSrc:
      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    linkText: "Explore",
    linkUrl: "#",
  },
  {
    title: "Weather-Resistant: Protection Against Sun, Rain, and More",
    description:
      "Our structures provide reliable protection, allowing you to enjoy your outdoor spaces.",
    imageSrc:
      "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    linkText: "Get a Quote",
    linkUrl: "#",
  },
];
