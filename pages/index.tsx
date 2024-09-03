import { GetStaticProps } from 'next';
import Head from 'next/head';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/${locale}.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: {  // Ensure this type matches the actual data structure or use any if not using TypeScript types
    defaultSeo: any;
    heroData: any;
    aboutData: any;
    portfolioData: any;
    blogData: any;
    contactData: any;
    testimonialData: any; // Make sure this exists in your locale file
  };
}) {
  const {
    defaultSeo,
    heroData,
    aboutData,
    portfolioData,
    blogData,
    contactData,
    testimonialData,
  } = content;

  return (
    <>
      <Head>
        <title>{defaultSeo.title}</title>
        {/* other meta tags */}
      </Head>

      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      <TestimonialsSection testimonialData={testimonialData} />
      <ContactSection contactData={contactData} />
    </>
  );
}
