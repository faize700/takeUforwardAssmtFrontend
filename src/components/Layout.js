import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, CssBaseline } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dynamic One-Page Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
      <footer>
        <Box sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
          <Typography variant="body2" color="textSecondary">
            &copy; 2024 Gul Muazzam Faize
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};

export default Layout;
