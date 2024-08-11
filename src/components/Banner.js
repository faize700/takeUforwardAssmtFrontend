import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Link, Box } from '@mui/material';

function Banner({ description, link, timer }) {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    // Reset timer on new props
    setTimeLeft(timer);

    // Initialize countdown
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, [timer]);

  // Function to format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Card variant="outlined" style={{ margin: '20px', padding: '20px', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6" component="p" gutterBottom>
          {description}
        </Typography>
        {link && (
          <Link href={link} target="_blank" rel="noopener noreferrer" variant="body2" color="primary">
            Learn More
          </Link>
        )}
        <Box mt={2}>
          <Typography variant="h4" component="div" color={timeLeft > 0 ? 'textPrimary' : 'error'}>
            {timeLeft > 0 ? formatTime(timeLeft) : 'Expired'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Banner;
