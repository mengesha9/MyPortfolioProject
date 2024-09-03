import Image from 'next/legacy/image';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';

interface TestimonialCardProps {
  title: string;
  quote: string;
  author: string;
  date: string;
  link: string;
  mediaSrc: string;
}

const TestimonialCard = ({ title, quote, author, date, link, mediaSrc }: TestimonialCardProps) => {
  return (
    <Card sx={{ mb: 4 }}>
      <Image
        src={mediaSrc}
        alt={title}
        width={160}
        height={160}
        placeholder="blur"
        blurDataURL={mediaSrc} // Assuming you have a low-res placeholder or use the shimmer effect function
      />
      <CardContent>
        <Typography variant="h5" component="h2">{title}</Typography>
        <Typography variant="body1" color="text.secondary">{quote}</Typography>
        <Typography variant="body2" color="text.primary">{author} - {date}</Typography>
        <Link href={link} rel="noopener noreferrer" target="_blank">
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
