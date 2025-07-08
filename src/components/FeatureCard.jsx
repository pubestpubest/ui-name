import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  chips, 
  gradientColors, 
  iconBackground
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Fixed size configuration for uniform cards
  const config = {
    minHeight: 280,
    iconSize: 28,
    titleVariant: 'h5',
    descriptionVariant: 'body2',
  };

  return (
    <Card 
      sx={{ 
        height: config.minHeight,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: gradientColors,
          borderRadius: '24px 24px 0 0',
        },
      }}
    >
      <CardContent sx={{ pt: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: '16px',
              background: iconBackground,
              color: 'white',
              mr: 2,
              flexShrink: 0,
            }}
          >
            <Icon sx={{ fontSize: config.iconSize }} />
          </Box>
          <Typography variant={config.titleVariant} component="h2" sx={{ 
            fontWeight: 600,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}>
            {title}
          </Typography>
        </Box>
        <Typography variant={config.descriptionVariant} color="text.secondary" sx={{ 
          mb: 3, 
          lineHeight: 1.6, 
          flex: 1,
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          hyphens: 'auto',
        }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {chips.map((chip, index) => (
            <Chip 
              key={index}
              label={chip.label} 
              size="small" 
              color={chip.color || 'default'} 
            />
          ))}
        </Box>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button size="small" sx={{ borderRadius: 2 }}>Learn More</Button>
          <IconButton 
            aria-label="add to favorites"
            sx={{ 
              borderRadius: '50%',
              '&:hover': { 
                backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FeatureCard; 