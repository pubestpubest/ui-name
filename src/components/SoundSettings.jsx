import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Slider,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  VolumeUp as VolumeIcon,
} from '@mui/icons-material';

function SoundSettings({ settings, handleSliderChange, handleSwitchChange }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <VolumeIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Sound & Audio
          </Typography>
        </Box>

        <Typography gutterBottom>Volume Level</Typography>
        <Slider
          value={settings.sound.volume}
          onChange={handleSliderChange('sound', 'volume')}
          min={0}
          max={100}
          step={10}
          marks
          valueLabelDisplay="auto"
          sx={{ mb: 3 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.sound.notifications}
              onChange={handleSwitchChange('sound', 'notifications')}
            />
          }
          label="Notification Sounds"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="text.secondary">
          Adjust audio settings for notifications and system sounds.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SoundSettings; 