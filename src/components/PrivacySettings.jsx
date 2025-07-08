import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Switch,
  Button,
} from '@mui/material';
import {
  Security as SecurityIcon,
} from '@mui/icons-material';

function PrivacySettings({ settings, handleSwitchChange }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SecurityIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Privacy & Security
          </Typography>
        </Box>

        <FormControlLabel
          control={
            <Switch
              checked={settings.privacy.profileVisible}
              onChange={handleSwitchChange('privacy', 'profileVisible')}
            />
          }
          label="Profile Visibility"
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.privacy.activityTracking}
              onChange={handleSwitchChange('privacy', 'activityTracking')}
            />
          }
          label="Activity Tracking"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="text.secondary" paragraph>
          Control who can see your profile and what data we collect.
        </Typography>

        <Button variant="outlined" startIcon={<SecurityIcon />}>
          Privacy Policy
        </Button>
      </CardContent>
    </Card>
  );
}

export default PrivacySettings; 