import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Box
} from '@mui/material';

const drawerWidth = 240;

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.body.style.background = darkMode ? '#f4f6f8' : '#121212';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#111827',
            color: '#fff'
          }
        }}
      >
        <Toolbar>
          <Typography variant="h6">KOWE</Typography>
        </Toolbar>

        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button component={Link} to="/create">
            <ListItemText primary="Create Post" />
          </ListItem>
        </List>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box sx={{ flexGrow: 1 }}>
        {/* TOP BAR */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            background: '#1f2937'
          }}
        >
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>Admin Panel</Typography>
            <Switch onChange={toggleDarkMode} />
          </Toolbar>
        </AppBar>

        {/* PAGE CONTENT */}
        <Box
          sx={{
            mt: 10,
            p: 3,
            background: '#f9fafb',
            minHeight: '100vh'
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;