import { Card, CardContent, Typography, Stack, Link, IconButton } from '@mui/material';
import Image from 'next/image';

interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

interface TestimonialCardProps {
  title: string;
  quote: string;
  author: string;
  date: string;
  mediaSrc: string;
  socialMedia: SocialMedia[];
}

const TestimonialCard = ({
  title,
  quote,
  author,
  date,
  mediaSrc,
  socialMedia
}: TestimonialCardProps) => {
  return (
    <Card sx={{ width: '40%', margin: 'auto' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Image src={mediaSrc} alt={title} width={80} height={80} style={{ borderRadius: '50%' }} />
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {quote}
        </Typography>
        <Typography variant="body2" color="textPrimary" gutterBottom>
          {author} - {date}
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
          {socialMedia.map((media) => (
            <Link key={media.platform} href={media.url} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <Image src={media.icon} alt={media.platform} width={24} height={24} />
              </IconButton>
            </Link>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
