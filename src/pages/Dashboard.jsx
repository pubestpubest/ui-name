import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

function Dashboard() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Dashboard cards data
  const dashboardCards = [
    {
      title: 'Analytics Overview',
      value: '2,847',
      change: '+12.5%',
      icon: TrendingUpIcon,
      color: 'success',
      description: 'Total page views this month',
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8.2%',
      icon: PeopleIcon,
      color: 'primary',
      description: 'Users currently online',
    },
    {
      title: 'Notifications',
      value: '23',
      change: '+5.1%',
      icon: NotificationsIcon,
      color: 'warning',
      description: 'Unread notifications',
    },
    {
      title: 'System Status',
      value: '99.9%',
      change: 'Stable',
      icon: AssessmentIcon,
      color: 'success',
      description: 'Uptime this month',
    },
  ];

  // Quick actions
  const quickActions = [
    { title: 'View Reports', icon: AssessmentIcon, color: 'primary' },
    { title: 'Manage Users', icon: PeopleIcon, color: 'secondary' },
    { title: 'Settings', icon: SettingsIcon, color: 'info' },
    { title: 'Notifications', icon: NotificationsIcon, color: 'warning' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your projects today.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {dashboardCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                  : 'linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(25,118,210,0.02) 100%)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(25,118,210,0.1)'}`,
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      background: `${card.color}.main`,
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <card.icon />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {card.title}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                      {card.value}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: card.change === 'Stable' ? 'success.main' : 'success.main',
                    fontWeight: 'bold',
                  }}
                >
                  {card.change}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper 
            sx={{ 
              p: 3,
              background: isDark 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(25,118,210,0.02) 100%)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(25,118,210,0.1)'}`,
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, borderRadius: 1, bgcolor: 'background.paper' }}>
                  <Box sx={{ p: 1, borderRadius: 1, bgcolor: 'primary.main', color: 'white', mr: 2 }}>
                    <DashboardIcon fontSize="small" />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" fontWeight="bold">
                      Activity {item}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      This is a sample activity description
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    2h ago
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              p: 3,
              background: isDark 
                ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(135deg, rgba(25,118,210,0.05) 0%, rgba(25,118,210,0.02) 100%)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(25,118,210,0.1)'}`,
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              {quickActions.map((action, index) => (
                <Grid item xs={6} key={index}>
                  <Button
                    variant="outlined"
                    startIcon={<action.icon />}
                    fullWidth
                    sx={{ 
                      justifyContent: 'flex-start',
                      borderColor: `${action.color}.main`,
                      color: `${action.color}.main`,
                      '&:hover': {
                        borderColor: `${action.color}.dark`,
                        backgroundColor: `${action.color}.main`,
                        color: 'white',
                      }
                    }}
                  >
                    {action.title}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 