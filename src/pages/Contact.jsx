import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';

// Import the new components
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Have a question or need help? We'd love to hear from you.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <ContactForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <ContactInfo />
        </Grid>
      </Grid>

      {/* Success Snackbar */}
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact; 