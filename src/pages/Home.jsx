import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  Accessibility as AccessibilityIcon,
  Code as CodeIcon,
  Book as BookIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Import the new components
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import StatisticsCard from '../components/StatisticsCard';
import CallToAction from '../components/CallToAction';


function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Feature data
  const features = [
    {
      icon: SpeedIcon,
      title: 'Performance',
      description: 'Optimized components with excellent performance out of the box.',
      chips: [
        { label: 'Fast', color: 'success' },
        { label: 'Optimized' }
      ],
      gradientColors: 'linear-gradient(90deg, #4caf50 0%, #45a049 100%)',
      iconBackground: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
    },
    {
      icon: SecurityIcon,
      title: 'Security',
      description: 'Built with security in mind. All components follow best practices.',
      chips: [
        { label: 'Secure', color: 'error' },
        { label: 'Audited' }
      ],
      gradientColors: isDark 
        ? 'linear-gradient(90deg, #f48fb1 0%, #ec407a 100%)'
        : 'linear-gradient(90deg, #dc004e 0%, #b71c1c 100%)',
      iconBackground: isDark 
        ? 'linear-gradient(135deg, #f48fb1 0%, #ec407a 100%)'
        : 'linear-gradient(135deg, #dc004e 0%, #b71c1c 100%)',
    },
    {
      icon: PaletteIcon,
      title: 'Customizable',
      description: 'Highly customizable components that adapt to your design system.',
      chips: [
        { label: 'Flexible', color: 'primary' },
        { label: 'Themable' }
      ],
      gradientColors: isDark 
        ? 'linear-gradient(90deg, #90caf9 0%, #64b5f6 100%)'
        : 'linear-gradient(90deg, #1976d2 0%, #1565c0 100%)',
      iconBackground: isDark 
        ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)'
        : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    },
    {
      icon: AccessibilityIcon,
      title: 'Accessibility',
      description: 'Built with accessibility in mind for all users.',
      chips: [
        { label: 'ARIA', color: 'info' },
        { label: 'Screen Reader' }
      ],
      gradientColors: isDark 
        ? 'linear-gradient(90deg, #ff9800 0%, #f57c00 100%)'
        : 'linear-gradient(90deg, #ff9800 0%, #e65100 100%)',
      iconBackground: isDark 
        ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
        : 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
    },
    {
      icon: CodeIcon,
      title: 'TypeScript',
      description: 'Full TypeScript support for better development experience.',
      chips: [
        { label: 'Type Safe', color: 'secondary' },
        { label: 'IntelliSense' }
      ],
      gradientColors: isDark 
        ? 'linear-gradient(90deg, #9c27b0 0%, #7b1fa2 100%)'
        : 'linear-gradient(90deg, #9c27b0 0%, #6a1b9a 100%)',
      iconBackground: isDark 
        ? 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)'
        : 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
    },
    {
      icon: BookIcon,
      title: 'Documentation',
      description: 'Comprehensive documentation and examples.',
      chips: [
        { label: 'Examples', color: 'warning' },
        { label: 'Guides' }
      ],
      gradientColors: isDark 
        ? 'linear-gradient(90deg, #00bcd4 0%, #0097a7 100%)'
        : 'linear-gradient(90deg, #00bcd4 0%, #00838f 100%)',
      iconBackground: isDark 
        ? 'linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)'
        : 'linear-gradient(135deg, #00bcd4 0%, #00838f 100%)',
    },
  ];

  // Statistics data
  const statistics = [
    {
      value: '50+',
      label: 'Components',
      gradientColors: isDark 
        ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)'
        : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    },
    {
      value: '2M+',
      label: 'Downloads',
      gradientColors: isDark 
        ? 'linear-gradient(135deg, #f48fb1 0%, #ec407a 100%)'
        : 'linear-gradient(135deg, #dc004e 0%, #b71c1c 100%)',
    },
    {
      value: '99%',
      label: 'Uptime',
      gradientColors: isDark 
        ? 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)'
        : 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
    },
    {
      value: '24/7',
      label: 'Support',
      gradientColors: isDark 
        ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
        : 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <HeroSection />
        {/* Feature Cards - Bento Layout */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Features
          </Typography>

          <Grid container spacing={1} >
            {/* First row - Large card spans 2 columns, medium card spans 1 */}
            <Grid item size={{ xs:12, sm:8, md:8 }} >
              <FeatureCard {...features[0]} />
            </Grid>
            <Grid item size={{ xs:12, sm:4, md:4 }} >
              <FeatureCard {...features[1]} />
            </Grid>

            {/* Second row - Three equal cards */}
            <Grid item size={{ xs:12, sm:4, md:4 }} >
              <FeatureCard {...features[2]} />
            </Grid>
            <Grid item size={{ xs:12, sm:8, md:8}}>
              <FeatureCard {...features[3]} />
            </Grid>
            
            {/* Third row - One card spans full width */}
            <Grid item size={{ xs:12, sm:8, md:8 }} >
              <FeatureCard {...features[4]} />
            </Grid>
            <Grid item size={{ xs:12, sm:4, md:4 }} >
              <FeatureCard {...features[5]} />
            </Grid>
            
          </Grid>
        </Box>


        {/* Statistics Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Why Choose Material UI?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {statistics.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatisticsCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <CallToAction />
      </Container>
    </>
  );
}

export default Home; 