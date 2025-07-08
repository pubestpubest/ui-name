import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  ContactMail as ContactIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ darkMode, handleThemeToggle, drawerWidth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/', badge: null, placeholder: false },
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', badge: null, placeholder: false },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile', badge: 'New' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings', badge: null },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact', badge: null },
  ];

  const handleNavigation = (path, placeholder) => {
    if (placeholder) {
      alert('Home page will be implemented soon!');
      return;
    }
    navigate(path);
  };

  return (
    <Box sx={{
      width: drawerWidth,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 24,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      overflow: 'hidden',
      boxShadow: 'none',
      p: 0,
      m: 0,
    }}>
      {/* Header Section */}
      <Box sx={{
        p: 3,
        pt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        background: darkMode
          ? 'linear-gradient(135deg, rgba(144,202,249,0.1) 0%, rgba(100,181,246,0.05) 100%)'
          : 'linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(21,101,192,0.05) 100%)',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 24,
      }}>
        <Avatar
          sx={{
            width: 64,
            height: 64,
            mb: 2,
            background: darkMode
              ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)'
              : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            boxShadow: darkMode
              ? '0 8px 24px rgba(144, 202, 249, 0.3)'
              : '0 8px 24px rgba(25, 118, 210, 0.3)',
          }}
        >
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          John Doe
        </Typography>
        <Typography variant="body2" sx={{
          color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
          mb: 2,
        }}>
          Administrator
        </Typography>
        <Chip
          label="Online"
          size="small"
          color="success"
          sx={{
            borderRadius: 2,
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Navigation Section */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography variant="overline" sx={{
          px: 2,
          mb: 1,
          display: 'block',
          fontWeight: 600,
          color: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
        }}>
          Navigation
        </Typography>
        <List sx={{ px: 1 }}>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigation(item.path, item.placeholder)}
                sx={{
                  borderRadius: 3,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'primary.contrastText',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 600 : 500,
                  }}
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    color="primary"
                    sx={{
                      ml: 1,
                      height: 20,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer Section */}
      <Box sx={{
        p: 2,
        borderTop: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)',
      }}>
        <Typography variant="overline" sx={{
          px: 2,
          mb: 1,
          display: 'block',
          fontWeight: 600,
          color: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
        }}>
          Quick Actions
        </Typography>
        <List sx={{ px: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 3,
                mb: 0.5,
              }}
              onClick={() => {
                alert('Notifications clicked!');
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
              <Chip
                label="3"
                size="small"
                color="error"
                sx={{
                  height: 20,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Theme Toggle in Footer */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
          borderRadius: 3,
          mt: 1,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LightModeIcon sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Theme
            </Typography>
          </Box>
          <Switch
            checked={darkMode}
            onChange={handleThemeToggle}
            color="default"
            size="small"
            sx={{
              '& .MuiSwitch-thumb': {
                boxShadow: 'none',
              },
              '& .MuiSwitch-track': {
                borderRadius: 12,
              },
            }}
          />
          <DarkModeIcon sx={{ ml: 1, fontSize: 20 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar; 