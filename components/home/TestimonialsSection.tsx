// TestimonialsSection.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShortCenteredDivider from '../ui/ShortCenteredDivider';
import TestimonialCard from './TestimonialCard';
import testimonials from './constants/testimonials';  // Assuming this is the correct path

interface TestimonialData {
  featuredTestimonial: string;
  mostRecent: string;
  button: string;
}

export default function Testimonials({ testimonialData: t }: { testimonialData: TestimonialData }) {
  return (
    <Box component="section" id="testimonials" sx={{ pb: 8, pt: 10, bgcolor: (theme) => theme.palette.grey[900] }}>
      <Container>
        <Typography gutterBottom align="center" component="h2" variant="h3">Testimonials</Typography>
        <ShortCenteredDivider sx={{ mb: 4 }} />
        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <Typography gutterBottom align="left" component="h2" variant="h4">{t.featuredTestimonial}</Typography>
            <Button
              fullWidth
              href="https://link-to-featured-testimonial.com"
              rel="noopener"
              size="large"
              sx={{ display: { xs: 'none', md: 'flex' } }}
              target="_blank"
              variant="contained"
            >
              {t.button}
            </Button>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography gutterBottom align="right" component="h2" variant="h4">{t.mostRecent}</Typography>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.title}
                title={testimonial.title}
                quote={testimonial.quote}
                author={testimonial.author}
                date={testimonial.date}
                link={testimonial.link}
                mediaSrc={testimonial.mediaSrc}
              />
            ))}
            <Button
              fullWidth
              href="https://link-to-more-testimonials.com"
              rel="noopener"
              size="large"
              sx={{ display: { md: 'none' } }}
              target="_blank"
              variant="contained"
            >
              {t.button}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
