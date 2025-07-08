import React, { useState, useMemo } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Switch,
  Fab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  ContactMail as ContactIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import Sidebar from './Sidebar';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true); // Persistent drawer state
  const navigate = useNavigate();
  const location = useLocation();
  
  const isMobile = useMediaQuery('(max-width:900px)');
  const drawerWidth = 280;

  // Create themes with curved design
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: darkMode ? '#90caf9' : '#1976d2',
          },
          secondary: {
            main: darkMode ? '#f48fb1' : '#dc004e',
          },
          background: {
            default: darkMode ? '#0a0a0a' : '#fafafa',
            paper: darkMode ? '#1a1a1a' : '#ffffff',
          },
        },
        shape: {
          borderRadius: 20, // Increased from default 4
        },
        typography: {
          h2: {
            fontWeight: 600,
            letterSpacing: '-0.02em',
          },
          h5: {
            fontWeight: 500,
            letterSpacing: '-0.01em',
          },
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 24,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: darkMode 
                    ? '0 20px 40px rgba(255,255,255,0.1)' 
                    : '0 20px 40px rgba(0,0,0,0.12)',
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 16,
                padding: '12px 24px',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: darkMode 
                    ? '0 8px 20px rgba(144, 202, 249, 0.3)' 
                    : '0 8px 20px rgba(25, 118, 210, 0.3)',
                  transform: 'translateY(-2px)',
                },
              },
              contained: {
                background: darkMode 
                  ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)' 
                  : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                '&:hover': {
                  background: darkMode 
                    ? 'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)' 
                    : 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                },
              },
              outlined: {
                borderRadius: 16,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: darkMode ? 'rgba(144, 202, 249, 0.08)' : 'rgba(25, 118, 210, 0.08)',
                },
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: 16,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: darkMode 
                      ? '0 4px 12px rgba(255,255,255,0.1)' 
                      : '0 4px 12px rgba(0,0,0,0.1)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: darkMode 
                      ? '0 8px 20px rgba(144, 202, 249, 0.2)' 
                      : '0 8px 20px rgba(25, 118, 210, 0.2)',
                  },
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 20,
                border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                margin: '4px 8px',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateX(8px)',
                  backgroundColor: darkMode ? 'rgba(144, 202, 249, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                },
                '&.Mui-selected': {
                  borderRadius: 12,
                  background: darkMode 
                    ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)' 
                    : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  '&:hover': {
                    background: darkMode 
                      ? 'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)' 
                      : 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                  },
                },
              },
            },
          },
          MuiFab: {
            styleOverrides: {
              root: {
                borderRadius: 20,
                width: 64,
                height: 64,
                boxShadow: darkMode 
                  ? '0 8px 24px rgba(144, 202, 249, 0.3)' 
                  : '0 8px 24px rgba(25, 118, 210, 0.3)',
                background: darkMode 
                  ? 'linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)' 
                  : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                '&:hover': {
                  transform: 'scale(1.1) rotate(90deg)',
                  boxShadow: darkMode 
                    ? '0 12px 32px rgba(144, 202, 249, 0.4)' 
                    : '0 12px 32px rgba(25, 118, 210, 0.4)',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                fontWeight: 500,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: darkMode 
                  ? 'rgba(26, 26, 26, 0.8)' 
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                boxShadow: darkMode 
                  ? '0 4px 20px rgba(0,0,0,0.3)' 
                  : '0 4px 20px rgba(0,0,0,0.1)',
                color: darkMode ? '#ffffff' : '#1976d2',
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                borderRadius: '0 24px 24px 0',
                border: 'none',
                background: darkMode 
                  ? 'rgba(26, 26, 26, 0.95)' 
                  : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: darkMode 
                  ? '4px 0 20px rgba(0,0,0,0.3)' 
                  : '4px 0 20px rgba(0,0,0,0.1)',
              },
            },
          },
          MuiAvatar: {
            styleOverrides: {
              root: {
                border: darkMode ? '3px solid rgba(255,255,255,0.1)' : '3px solid rgba(0,0,0,0.1)',
              },
            },
          },
          MuiAlert: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: {
                '&.curved-container': {
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: darkMode 
                      ? 'linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 100%)'
                      : 'linear-gradient(180deg, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)',
                    borderRadius: '0 0 50px 50px',
                    zIndex: -1,
                  },
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

  const navigationItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/', badge: null },
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', badge: null },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile', badge: 'New' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings', badge: null },
    { text: 'Contact', icon: <ContactIcon />, path: '/contact', badge: null },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1, 
          boxShadow: 'none',
          width: isMobile ? '100%' : `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ 
              mr: 2,
              borderRadius: '50%',
              '&:hover': { 
                backgroundColor: 'rgba(144, 202, 249, 0.1)',
                transform: 'rotate(90deg)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Material UI Demo
          </Typography>
          
          {/* Navigation Links for Desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', mr: 2, gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mx: 0.5,
                    borderRadius: 3,
                    px: 2,
                    py: 1,
                    backgroundColor: location.pathname === item.path ? 'rgba(144,202,249,0.15)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(144,202,249,0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
          
          <Button 
            color="inherit" 
            variant="outlined"
            sx={{ 
              borderRadius: 4,
              borderWidth: 2,
              '&:hover': { 
                borderWidth: 2,
                transform: 'translateY(-2px)',
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box component="nav">
        <Drawer
          variant={isMobile ? 'temporary' : 'persistent'}
          open={isMobile ? mobileOpen : drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              mt: 0,
              height: isMobile ? '100%' : '100vh',
              borderRadius: isMobile ? 0 : '0 24px 24px 0',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 24,
              borderBottomRightRadius: 24,
              p: 0,
              m: 0,
            },
          }}
        >
          <Sidebar darkMode={darkMode} handleThemeToggle={handleThemeToggle} drawerWidth={drawerWidth} />
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: '64px',
          minHeight: '100vh',
          backgroundColor: 'background.default',
          position: 'relative',
          // Remove width adjustment
          // width: isMobile ? '100%' : `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
          // Instead, use marginLeft to push content when sidebar is open on desktop
          marginLeft: !isMobile && drawerOpen ? `${drawerWidth}px` : 0,
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: darkMode 
              ? 'radial-gradient(ellipse at top, rgba(144,202,249,0.1) 0%, transparent 70%)'
              : 'radial-gradient(ellipse at top, rgba(25,118,210,0.05) 0%, transparent 70%)',
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb />
          <Outlet />
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
        }}
        onClick={() => {
          alert('Add new item!');
        }}
      >
        <AddIcon />
      </Fab>
    </ThemeProvider>
  );
}

export default Layout; 