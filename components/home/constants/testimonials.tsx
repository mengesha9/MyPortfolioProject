// components/home/constants/testimonials.ts
interface Testimonial {
    title: string;
    quote: string;
    author: string;
    date: string;
    link: string;
    mediaSrc: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Excellent Service",
    quote: "This service has transformed our business. Highly recommend!",
    author: "Jane Doe",
    date: "March 15, 2022",
    link: "https://www.example.com/full-testimonial",
    mediaSrc: "/public/projectMedia/testimonial1.jpg"
  },
  {
    title: "Professional and Reliable",
    quote: "A reliable partner in our continuous journey.",
    author: "John Smith",
    date: "July 20, 2022",
    link: "https://www.example.com/full-testimonial",
    mediaSrc: "/public/projectMedia/testimonial2.jpg"
  }
];

export default testimonials;
