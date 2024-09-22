// pages/index.tsx
import { GetStaticProps } from 'next';
import Head from 'next/head';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import { Testimonial } from '../components/home/constants/testimonials';

interface ContentProps {
  defaultSeo: {
    title: string;
    // add other properties of defaultSeo as needed
  };
  heroData: any;  // Specify more detailed type if possible
  aboutData: any;  // Specify more detailed type if possible
  portfolioData: any;  // Specify more detailed type if possible
  blogData: any;  // Specify more detailed type if possible
  contactData: any;  // Specify more detailed type if possible
  testimonialData: Testimonial[];  // Specify more detailed type if possible
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/en.json`);

  const testimonialData = [
    {
      title: "Excellent Service",
      quote: "This service has transformed our business. Highly recommend!",
      author: "Bruk Mekonen",
      date: "March 15, 2022",
      link: "https://www.example.com/full-testimonial",
      mediaSrc: "/public/projectMedia/testimonial1.jpg",
      socialMedia: [
        { platform: "Twitter", url: "https://twitter.com/janedoe", icon: "/public/icons/twitter.png" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe", icon: "/public/icons/linkedin.png" }
      ]
    },

    {
      title: "Excellent Service",
      quote: "This service has transformed our business. Highly recommend!",
      author: "Jane Doe",
      date: "March 15, 2022",
      link: "https://www.example.com/full-testimonial",
      mediaSrc: "/public/projectMedia/testimonial1.jpg",
      socialMedia: [
        { platform: "Twitter", url: "https://twitter.com/janedoe", icon: "/public/x.webp" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/janedoe", icon: "/public/icons/linkedin.png" }
      ]
    },

    // Add more testimonials as needed
  ];

  return {
    props: {
      content: {
        ...response.default,
        testimonialData, // Adding mock testimonial data
      },
    },
  };
};

export default function Index({ content }: { content: ContentProps }) {
  return (
    <>
      <Head>
        <title>{content.defaultSeo.title}</title>
        {/* additional meta tags can be placed here */}
      </Head>

      <HeroSection heroData={content.heroData} />

      <AboutSection aboutData={content.aboutData} />
      <PortfolioSection portfolioData={content.portfolioData} />
      {/* testimonials was here!! */}
      {/* <TestimonialsSection testimonialData={content.testimonialData} /> */}
      <ContactSection contactData={content.contactData} />
    </>
  );
}
