// components/SubMenu.tsx
import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, ButtonBase, Popover } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';

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
}

const SubMenu: React.FC<SubMenuProps> = ({ label, icon, items, drawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ButtonBase onClick={handleOpen} sx={{ width: '100%' }}>
        <ListItem>
          <ListItemIcon>{icon}</ListItemIcon>
          {drawerOpen && <ListItemText primary={label} />}
          {drawerOpen && (open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItem>
      </ButtonBase>

      <Popover
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
      >
        <Box sx={{ minWidth: 160, maxWidth: 220, padding: 1 }}>
          <List>
            {items.map((item) => (
              <ButtonBase
                component={NextLink}
                href={item.href}
                sx={{ width: '100%' }}
                key={item.label}
              >
                <ListItem>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </ButtonBase>
            ))}
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default SubMenu;
