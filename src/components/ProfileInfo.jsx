import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

function ProfileInfo({ profile }) {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Full Name" 
          secondary={profile.name} 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Email" 
          secondary={profile.email} 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Phone" 
          secondary={profile.phone} 
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocationIcon />
        </ListItemIcon>
        <ListItemText 
          primary="Location" 
          secondary={profile.location} 
        />
      </ListItem>
    </List>
  );
}

export default ProfileInfo; 