import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Button,
  Box,
  Alert,
} from '@mui/material';
import {
  Save as SaveIcon,
  Restore as RestoreIcon,
} from '@mui/icons-material';

// Import the new components
import GeneralSettings from '../components/GeneralSettings';
import NotificationSettings from '../components/NotificationSettings';
import PrivacySettings from '../components/PrivacySettings';
import SoundSettings from '../components/SoundSettings';
import DataManagement from '../components/DataManagement';


function Settings() {
  const [settings, setSettings] = useState({
    language: 'en',
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
    privacy: {
      profileVisible: true,
      activityTracking: false,
    },
    appearance: {
      fontSize: 14,
      compactMode: false,
    },
    sound: {
      volume: 50,
      notifications: true,
    }
  });

  const [saved, setSaved] = useState(false);

  const handleSwitchChange = (category, setting) => (event) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: event.target.checked,
      },
    });
  };

  const handleSelectChange = (setting) => (event) => {
    setSettings({
      ...settings,
      [setting]: event.target.value,
    });
  };

  const handleSliderChange = (category, setting) => (event, newValue) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: newValue,
      },
    });
  };

  const handleSave = () => {
    // Simulate saving
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings({
      language: 'en',
      notifications: {
        email: true,
        push: false,
        sms: true,
      },
      privacy: {
        profileVisible: true,
        activityTracking: false,
      },
      appearance: {
        fontSize: 14,
        compactMode: false,
      },
      sound: {
        volume: 50,
        notifications: true,
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1">
          Settings
        </Typography>
        <Box>
          <Button 
            startIcon={<RestoreIcon />} 
            onClick={handleReset}
            sx={{ mr: 2 }}
            variant="outlined"
          >
            Reset
          </Button>
          <Button 
            startIcon={<SaveIcon />} 
            onClick={handleSave}
            variant="contained"
          >
            Save Changes
          </Button>
        </Box>
      </Box>

      {saved && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Settings saved successfully!
        </Alert>
      )}

      <Grid container spacing={4}>
        {/* General Settings */}
        <Grid item xs={12} md={6}>
          <GeneralSettings 
            settings={settings}
            handleSelectChange={handleSelectChange}
            handleSliderChange={handleSliderChange}
            handleSwitchChange={handleSwitchChange}
          />
        </Grid>

        {/* Notifications Settings */}
        <Grid item xs={12} md={6}>
          <NotificationSettings 
            settings={settings}
            handleSwitchChange={handleSwitchChange}
          />
        </Grid>

        {/* Privacy Settings */}
        <Grid item xs={12} md={6}>
          <PrivacySettings 
            settings={settings}
            handleSwitchChange={handleSwitchChange}
          />
        </Grid>

        {/* Sound Settings */}
        <Grid item xs={12} md={6}>
          <SoundSettings 
            settings={settings}
            handleSliderChange={handleSliderChange}
            handleSwitchChange={handleSwitchChange}
          />
        </Grid>

        {/* Data Management */}
        <Grid item xs={12}>
          <DataManagement />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings; 