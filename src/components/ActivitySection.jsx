import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

function ActivitySection() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Recent Activity
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Updated profile information"
              secondary="2 hours ago"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Changed notification settings"
              secondary="1 day ago"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Updated privacy settings"
              secondary="3 days ago"
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default ActivitySection; 