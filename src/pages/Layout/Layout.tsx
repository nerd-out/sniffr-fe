import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Layout = (props: any) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('x-access-token');
    navigate('/');
  };

  const loggedInNavItems = [
    { label: 'Options', func: () => navigate('/user-options') },
    { label: 'Find a Match!', func: () => navigate('/swipe') },
    { label: 'Matches', func: () => navigate('/matches') },
    { label: 'About', func: () => navigate('/about') },
    { label: 'Logout', func: logout }
  ];

  const loggedOutNavItems = [
    { label: 'Home', func: () => navigate('/') },
    { label: 'About', func: () => navigate('/about') },
    { label: 'Login', func: () => navigate('/login') },
    { label: 'Register', func: () => navigate('/register') }
  ];

  const isLoggedIn = !!localStorage.getItem('x-access-token');
  const navItems = isLoggedIn ? loggedInNavItems : loggedOutNavItems;
  const sniffrLogoRoute = isLoggedIn ? '/user-options' : '/';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: 'pointer' }}
        onClick={() => navigate(sniffrLogoRoute)}
      >
        sniffr
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.label} disablePadding onClick={item.func}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<>{item.label}</>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                cursor: 'pointer'
              }}
              onClick={() => navigate(sniffrLogoRoute)}
            >
              sniffr
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(item => (
                <Button
                  key={item.label}
                  sx={{ color: '#fff' }}
                  onClick={item.func}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: '100%' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
