import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';

function ContactInfo() {
  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'hello@materialui.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: <LocationIcon />,
      title: 'Address',
      content: '123 Material Street, Design City, DC 12345',
      description: 'Come say hello at our office',
    },
    {
      icon: <ScheduleIcon />,
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      description: 'Weekend support available',
    },
  ];

  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <BusinessIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h5">
              Get in Touch
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            We're here to help and answer any question you might have. 
            We look forward to hearing from you.
          </Typography>

          <List>
            {contactInfo.map((info, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon>
                  {info.icon}
                </ListItemIcon>
                <ListItemText
                  primary={info.title}
                  secondary={
                    <Box>
                      <Typography variant="body2" component="div">
                        {info.content}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {info.description}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Can't find what you're looking for? Check out our FAQ section or contact us directly.
          </Typography>
          <Button variant="outlined" fullWidth>
            View FAQ
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default ContactInfo; 