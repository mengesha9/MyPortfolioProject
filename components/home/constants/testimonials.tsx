export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  title: string;
  quote: string;
  author: string;
  date: string;
  link: string;
  mediaSrc: string;
  socialMedia: SocialMedia[];
}

const testimonials: Testimonial[] = [
  {
    title: "Excellent Service",
    quote: "This service has transformed our business. Highly recommend!",
    author: "Jane Doe",
    date: "March 15, 2022",
    link: "https://www.example.com/full-testimonial",
    mediaSrc: "/public/projectMedia/testimonial1.jpg",
    socialMedia: [
      { platform: "X", url: "https://twitter.com/janedoe", icon: "/public/icons/x.webp" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe", icon: "/public/icons/linkedin.png" }
    ]
  },
  // Add more testimonials
];

export default testimonials;
