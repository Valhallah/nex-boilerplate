// components/SubMenu.tsx
import React, { useState, useRef } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Button, Popover } from '@mui/material';
import NextLink from 'next/link';
import styles from './NavBar.module.scss';

interface SubMenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SubMenuProps {
  label: string;
  icon: React.ReactNode;
  items: SubMenuItem[];
  drawerOpen: boolean;
  ariaLabel: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ label, icon, items, drawerOpen, ariaLabel }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    buttonRef.current?.focus(); // Return focus to the triggering button
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen(event);
    } else if (event.key === 'Escape') {
      handleClose();
    }
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        id="contact"
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        ref={buttonRef}
        className={styles.button}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="submenu-popover"
        aria-label={ariaLabel}
      >
        <ListItem className={`${styles.listItem} ${!open ? styles.collapsed : ''}`}>
          <ListItemIcon className={`${styles.listItemIcon} ${open ? styles.expanded : ''}`}>{icon}</ListItemIcon>
          {drawerOpen && <ListItemText primary={label} />}
        </ListItem>
      </Button>

      <Popover
        id="submenu-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: drawerOpen ? 'left' : 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: drawerOpen ? 'left' : 'right',
        }}
        aria-labelledby="submenu-label"
        disableAutoFocus
        disableEnforceFocus
      >
        <Box
          sx={{ minWidth: 160, maxWidth: 220 }}
          role="menu"
          aria-label={`${label} submenu`}
        >
          <List>
            {items.map((item) => (
              <Button
                component={NextLink}
                href={item.href}
                sx={{ width: '100%' }}
                key={item.label}
                role="menuitem"
                aria-label={`Navigate to ${item.label}`}
              >
                <ListItem>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Button>
            ))}
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default SubMenu;
