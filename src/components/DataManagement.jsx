import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import {
  Storage as StorageIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

function DataManagement() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <StorageIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Data Management
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              startIcon={<BackupIcon />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Export Data
            </Button>
            <Typography variant="body2" color="text.secondary">
              Download a copy of your data
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              startIcon={<RestoreIcon />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Import Data
            </Button>
            <Typography variant="body2" color="text.secondary">
              Restore from a backup file
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              fullWidth
              sx={{ mb: 2 }}
            >
              Clear Data
            </Button>
            <Typography variant="body2" color="text.secondary">
              Permanently delete all data
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DataManagement; 