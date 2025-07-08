import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
} from '@mui/material';

function ProfileHeader({ profile }) {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2,
            bgcolor: 'primary.main',
            fontSize: '3rem',
          }}
        >
          {profile.name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        <Typography variant="h5" gutterBottom>
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {profile.bio}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Chip label="Developer" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Material UI" color="secondary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="React" sx={{ mr: 1, mb: 1 }} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProfileHeader; 