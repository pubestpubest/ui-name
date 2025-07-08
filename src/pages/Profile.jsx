import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

// Import the new components
import ProfileHeader from '../components/ProfileHeader';
import ProfileForm from '../components/ProfileForm';
import ProfileInfo from '../components/ProfileInfo';
import PreferencesSection from '../components/PreferencesSection';
import ActivitySection from '../components/ActivitySection';


function Profile() {
  const [editing, setEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about creating beautiful user experiences with Material UI.',
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleEdit = () => {
    setEditing(true);
    setEditProfile(profile);
  };

  const handleSave = () => {
    setProfile(editProfile);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setEditing(false);
  };

  const handleChange = (field) => (event) => {
    setEditProfile({
      ...editProfile,
      [field]: event.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Profile
      </Typography>
      
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid item xs={12} md={4}>
          <ProfileHeader profile={profile} />
        </Grid>

        {/* Profile Information */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5">
                  Personal Information
                </Typography>
                {!editing ? (
                  <Button startIcon={<EditIcon />} onClick={handleEdit}>
                    Edit
                  </Button>
                ) : (
                  <Box>
                    <Button 
                      startIcon={<SaveIcon />} 
                      onClick={handleSave}
                      sx={{ mr: 1 }}
                      variant="contained"
                    >
                      Save
                    </Button>
                    <Button 
                      startIcon={<CancelIcon />} 
                      onClick={handleCancel}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </Box>
                )}
              </Box>

              {editing ? (
                <ProfileForm 
                  editProfile={editProfile} 
                  handleChange={handleChange} 
                />
              ) : (
                <ProfileInfo profile={profile} />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Preferences Section */}
      <Box sx={{ mt: 2 }}>
        <PreferencesSection 
          notifications={notifications} 
          setNotifications={setNotifications} 
        />
      </Box>

      {/* Activity Section */}
      <Box sx={{ mt: 4 }}>
        <ActivitySection />
      </Box>
    </Container>
  );
}

export default Profile; 