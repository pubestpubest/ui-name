import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  Language as LanguageIcon,
} from '@mui/icons-material';

function GeneralSettings({ settings, handleSelectChange, handleSliderChange, handleSwitchChange }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LanguageIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            General
          </Typography>
        </Box>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Language</InputLabel>
          <Select
            value={settings.language}
            label="Language"
            onChange={handleSelectChange('language')}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
            <MenuItem value="ja">日本語</MenuItem>
          </Select>
        </FormControl>

        <Typography gutterBottom>Font Size</Typography>
        <Slider
          value={settings.appearance.fontSize}
          onChange={handleSliderChange('appearance', 'fontSize')}
          min={10}
          max={20}
          step={1}
          marks
          valueLabelDisplay="auto"
          sx={{ mb: 3 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.appearance.compactMode}
              onChange={handleSwitchChange('appearance', 'compactMode')}
            />
          }
          label="Compact Mode"
        />
      </CardContent>
    </Card>
  );
}

export default GeneralSettings; 