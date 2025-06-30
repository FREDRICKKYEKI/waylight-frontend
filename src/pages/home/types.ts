export type MenuItem = {
  name: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
};

/**
 *   {
    _createdAt: '2025-05-17T22:40:08Z',
    _id: '3f83c604-78a4-4f94-bce9-9dfbd8e57dfd',
    _rev: 'hEx3C9ahhX6Mu6qfwsO2sa',
    _type: 'testimonial',
    _updatedAt: '2025-05-17T22:42:02Z',
    company: 'Manager, ABC Corp',
    image: { _type: 'image', asset: [Object] },
    name: 'John Doe',
    text: 'The car shade structure has transformed our parking area, providing excellent protection from the elements. The installation was seamless and professional, exceeding our expectations!'
  },
 */
export type TestimonialType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "testimonial";
  _updatedAt: string;
  company: string;
  image: string;
  name: string;
  text: string;
};
