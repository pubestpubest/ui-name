import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import {
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

const Breadcrumb = () => {
  const location = useLocation();
  const theme = useTheme();
  
  // Define breadcrumb mappings
  const breadcrumbMap = {
    '/': 'Home',
    '/dashboard': 'Dashboard',
    '/profile': 'Profile',
    '/settings': 'Settings',
    '/contact': 'Contact',
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs = [
      {
        label: 'Home',
        path: '/',
        icon: <HomeIcon sx={{ fontSize: '1.2rem' }} />,
      },
    ];

    let currentPath = '';
    pathnames.forEach((name) => {
      currentPath += `/${name}`;
      const label = breadcrumbMap[currentPath] || name.charAt(0).toUpperCase() + name.slice(1);
      breadcrumbs.push({
        label,
        path: currentPath,
        icon: null,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '64px', // Height of the AppBar
        zIndex: (theme) => theme.zIndex.appBar - 1, // Just below the AppBar
        px: 3, // Only horizontal padding
        backgroundColor: 'background.paper',
        borderBottom: theme.palette.mode === 'dark' 
          ? '1px solid rgba(255,255,255,0.12)' 
          : '1px solid rgba(0,0,0,0.12)',
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 2px 8px 0 rgba(0,0,0,0.3)' 
          : '0 2px 8px 0 rgba(0,0,0,0.1)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <MuiBreadcrumbs
        separator={
          <NavigateNextIcon 
            fontSize="small" 
            sx={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255,255,255,0.5)' 
                : 'rgba(0,0,0,0.5)',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateX(2px)',
              },
            }} 
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          const commonStyles = {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '12px',
            transition: 'all 0.2s ease-in-out',
            fontSize: '0.9rem',
            minHeight: '32px', // Ensure consistent height
            lineHeight: '1.2', // Consistent line height
          };
          
          return isLast ? (
            <Typography
              key={breadcrumb.path}
              color="primary"
              sx={{
                ...commonStyles,
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            >
              {breadcrumb.icon}
              {breadcrumb.label}
            </Typography>
          ) : (
            <Link
              key={breadcrumb.path}
              to={breadcrumb.path}
              style={{
                textDecoration: 'none',
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.7)' 
                  : 'rgba(0,0,0,0.7)',
                fontWeight: 500,
                ...commonStyles,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = theme.palette.primary.main;
                e.target.style.backgroundColor = theme.palette.mode === 'dark' 
                  ? 'rgba(144, 202, 249, 0.1)' 
                  : 'rgba(25, 118, 210, 0.1)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.7)' 
                  : 'rgba(0,0,0,0.7)';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {breadcrumb.icon}
              {breadcrumb.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumb; 