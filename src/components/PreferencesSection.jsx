import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Switch,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

function PreferencesSection({ notifications, setNotifications }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
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
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
              }
              label="Email Notifications"
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Receive email notifications about important updates and activities.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <SecurityIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5">
                Privacy
              </Typography>
            </Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Profile Visibility"
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Allow other users to view your profile information.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default PreferencesSection; 