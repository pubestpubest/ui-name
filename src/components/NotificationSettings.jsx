import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

function NotificationSettings({ settings, handleSwitchChange }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <NotificationsIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Notifications
          </Typography>
        </Box>

        <FormControlLabel
          control={
            <Switch
              checked={settings.notifications.email}
              onChange={handleSwitchChange('notifications', 'email')}
            />
          }
          label="Email Notifications"
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.notifications.push}
              onChange={handleSwitchChange('notifications', 'push')}
            />
          }
          label="Push Notifications"
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.notifications.sms}
              onChange={handleSwitchChange('notifications', 'sms')}
            />
          }
          label="SMS Notifications"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="text.secondary">
          Choose how you want to receive notifications about important updates.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationSettings; 