import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function StatisticsCard({ value, label, gradientColors }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2" component="div" sx={{ 
        fontWeight: 700,
        background: gradientColors,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {value}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

export default StatisticsCard; 