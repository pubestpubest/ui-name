import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  Grid,
} from '@mui/material';
import {
  Send as SendIcon,
} from '@mui/icons-material';

function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Send us a Message
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Fill out the form below and we'll get back to you as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                value={formData.subject}
                onChange={handleChange('subject')}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange('message')}
                placeholder="Tell us how we can help you..."
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SendIcon />}
                fullWidth
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ContactForm; 