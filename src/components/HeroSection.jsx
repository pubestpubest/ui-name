import React from 'react';
import {
  Typography,
  Container,
  Button,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function HeroSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: 8,
        mb: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark 
            ? 'radial-gradient(ellipse at center, rgba(144,202,249,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(25,118,210,0.06) 0%, transparent 70%)',
          borderRadius: '0 0 80px 80px',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              background: isDark 
                ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)'
                : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
            }}
          >
            Welcome to Material UI
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 2 }}>
            A beautiful React component library following Google's Material Design
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Now with {isDark ? 'Dark' : 'Light'} Theme Support! 🌓
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                minWidth: 160,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                minWidth: 160,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection; 