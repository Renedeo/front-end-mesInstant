// pages/not-found.js
import Link from 'next/link';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { SentimentVeryDissatisfied as SadFaceIcon } from '@mui/icons-material';

const NotFound = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <SadFaceIcon sx={{ fontSize: 100, color: 'error.main' }} />
      <Typography variant="h4" color="textSecondary" marginTop={2}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" marginTop={2}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Link href="/">
        <MuiLink variant="body1" color="primary" marginTop={2}>
          Go to Home
        </MuiLink>
      </Link>
    </Box>
  );
};

export default NotFound;
