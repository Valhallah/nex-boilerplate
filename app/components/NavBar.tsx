// NavBar.tsx
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Toolbar, ButtonBase } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';

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
      >
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
        <ButtonBase component={NextLink} href="/" sx={{ width: '100%' }} key="Home">
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItem>
          </ButtonBase>
          <ButtonBase component={NextLink} href="/about" sx={{ width: '100%' }} key="About">
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {open && <ListItemText primary="About" />}
          </ListItem>
          </ButtonBase>
          <ButtonBase component={NextLink} href="/contact" sx={{ width: '100%' }} key="Contact">
          <ListItem>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Contact" />}
          </ListItem>
          </ButtonBase>
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

