// NavBar.tsx
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import SubMenu from './SubMenu';

const drawerWidth = 240;

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 60,
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
        aria-label="Main navigation drawer"
      >
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            aria-label={open ? 'Close main menu' : 'Open main menu'}
            aria-expanded={open}
            aria-controls="main-menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List id="main-menu">
          <Button
            component={NextLink}
            href="/"
            sx={{ width: '100%' }}
            key="Home"
            aria-label="Navigate to Home"
          >
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Home" />}
            </ListItem>
          </Button>
          <Button
            component={NextLink}
            href="/about"
            sx={{ width: '100%' }}
            key="About"
            aria-label="Navigate to About"
          >
            <ListItem>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              {open && <ListItemText primary="About" />}
            </ListItem>
          </Button>
          {/* Contact with Submenu */}
          <SubMenu
            label="Contact"
            icon={<ContactMailIcon />}
            drawerOpen={open}
            items={[
              { label: 'Phone', icon: <PhoneIcon />, href: '/contact/phone' },
              { label: 'Email', icon: <EmailIcon />, href: '/contact/email' },
            ]}
            ariaLabel="Open Contact submenu"
          />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
};

export default NavBar;
