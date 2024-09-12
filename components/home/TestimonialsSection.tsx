import dynamic from 'next/dynamic';
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import styles from './TestimonialsSection.module.css'; // Import your custom styles
import { Box, Typography } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { Pagination, Navigation } from 'swiper/modules'; // Swiper modules

// Dynamically import Swiper components to avoid SSR issues
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
  ssr: false,
});

interface TestimonialsSectionProps {
  testimonialData: any[];
}

const TestimonialsSection = ({ testimonialData }: TestimonialsSectionProps) => {
  return (
    <Box sx={{ py: 20, bgcolor: 'background.paper' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={100}
        slidesPerView={1} // Show 3 slides in a row
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index: number, className: string) => {
            return `<span class="${className} ${styles.paginationBullet}"></span>`;
          },
        }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
        }}
        onSlideChange={(swiper: any) => {
          if (swiper && swiper.slides && swiper.slides.length > 0) {
            swiper.slides.forEach((slide: any) => {
              if (slide && slide.classList) {
                slide.classList.remove(styles.swiperSlideActive);
              }
            });
            if (swiper.slides[swiper.activeIndex] && swiper.slides[swiper.activeIndex].classList) {
              swiper.slides[swiper.activeIndex].classList.add(styles.swiperSlideActive);
            }
          }
        }}
        onSwiper={(swiper: any) => {
          if (swiper.slides && swiper.slides[swiper.activeIndex]) {
            swiper.slides[swiper.activeIndex].classList.add(styles.swiperSlideActive);
          }
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.arrowContainer}>
        <div className={styles.prev}>❮</div>
        <div className={styles.next}>❯</div>
      </div>
    </Box>
  );
};

export default TestimonialsSection;
