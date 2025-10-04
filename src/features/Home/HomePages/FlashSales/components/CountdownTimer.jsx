import React from 'react';
import { Box, Typography } from '@mui/material';
import { useCountdown } from '../hooks/useCountdown';

const CountdownTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const TimeUnit = ({ label, value }) => (
    <Box sx={{ textAlign: 'center', mx: 1 }}>
      <Typography variant="caption" sx={{ color: '#666', fontSize: '12px', display: 'block', mb: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '32px' }}>
        {String(value).padStart(2, '0')}
      </Typography>
    </Box>
  );

  const Separator = () => (
    <Typography variant="h5" sx={{ mx: 1, color: '#DB4444', fontWeight: 600 }}>
      :
    </Typography>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TimeUnit label="Days" value={days} />
      <Separator />
      <TimeUnit label="Hours" value={hours} />
      <Separator />
      <TimeUnit label="Minutes" value={minutes} />
      <Separator />
      <TimeUnit label="Seconds" value={seconds} />
    </Box>
  );
};

export default CountdownTimer;
