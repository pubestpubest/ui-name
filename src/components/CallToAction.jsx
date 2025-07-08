import React from 'react';
import {
  Typography,
  Button,
  Box,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

function CallToAction() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 6,
      background: isDark 
        ? 'linear-gradient(135deg, rgba(144,202,249,0.1) 0%, rgba(100,181,246,0.1) 100%)'
        : 'linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(21,101,192,0.1) 100%)',
      borderRadius: 6,
      mb: 4,
    }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Ready to Get Started?
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        Join thousands of developers who are already building amazing applications with Material UI.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button 
          variant="contained" 
          size="large"
          startIcon={<TrendingUpIcon />}
          sx={{ 
            minWidth: 180,
            py: 1.5,
            fontSize: '1.1rem',
          }}
        >
          Start Building
        </Button>
        <Button 
          variant="outlined" 
          size="large"
          sx={{ 
            minWidth: 180,
            py: 1.5,
            fontSize: '1.1rem',
          }}
        >
          View Documentation
        </Button>
      </Box>
    </Box>
  );
}

export default CallToAction; 