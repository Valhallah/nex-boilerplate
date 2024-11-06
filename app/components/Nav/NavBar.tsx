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
import styles from './NavBar.module.scss';

const drawerWidth = 240;

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 240;
const collapsedWidth = 60;


  return (
    <Box id="navbar-container">
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : collapsedWidth,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            alignItems: open ? 'flex-start' : 'center',
          },
        }}
        aria-label="Main navigation drawer"
      >
        <Toolbar>
          <IconButton
            className={`${styles.iconButton} ${open ? styles.expanded : styles.collapsed}`}
            onClick={toggleDrawer}
            aria-label={open ? 'Close main menu' : 'Open main menu'}
            aria-expanded={open}
            aria-controls="main-menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List id="mainMenu">
          <Button
            id="home"
            component={NextLink}
            href="/"
            className={styles.button}
            key="Home"
            aria-label="Navigate to Home"
          >
            <ListItem className={`${styles.listItem} ${!open ? styles.collapsed : ''}`}>
              <ListItemIcon className={`${styles.listItemIcon} ${open ? styles.expanded : ''}`}>
                <HomeIcon/>
              </ListItemIcon>
              {open && <ListItemText primary="Home" />}
            </ListItem>
          </Button>
          <Button
            id="about"
            className={styles.button}
            component={NextLink}
            href="/about"
            key="About"
            aria-label="Navigate to About"
          >
            <ListItem className={`${styles.listItem} ${!open ? styles.collapsed : ''}`}>
              <ListItemIcon className={`${styles.listItemIcon} ${open ? styles.expanded : ''}`}>
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
