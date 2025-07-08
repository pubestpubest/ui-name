import React from 'react';
import {
  Grid,
  TextField,
} from '@mui/material';

function ProfileForm({ editProfile, handleChange }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          value={editProfile.name}
          onChange={handleChange('name')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={editProfile.email}
          onChange={handleChange('email')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          value={editProfile.phone}
          onChange={handleChange('phone')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Location"
          value={editProfile.location}
          onChange={handleChange('location')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Bio"
          multiline
          rows={3}
          value={editProfile.bio}
          onChange={handleChange('bio')}
        />
      </Grid>
    </Grid>
  );
}

export default ProfileForm; 