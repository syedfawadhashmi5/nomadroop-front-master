import {useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import avt from '../images/avt.webp'
import logoWhite from "../images/logoWhite.png";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Alert, Button, TextField } from '@mui/material';
import { Link, NavLink, useNavigate, Outlet  } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import LogoutIcon from "@mui/icons-material/Logout";
import { Navbar } from 'react-bootstrap';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ProfileLayout =({children}) => {
  const navigate = useNavigate();
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    appDispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const navitems = [
      {name: 'My Profile', route: '/profile'}, 
      {name: 'My Properties', route: '/profile/my-properties'},
      {name: 'Add Property', route: '/property/add'}, 
      {name: "Other Listing ", route: '/properties'} 
]

  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className='mx-auto'>
          {/* <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
          <div className='text-center'>
          <Navbar.Brand href="/" className='text-center'>
              <img
                className="img-fluid"
                src={logoWhite}
                width={120}
                
                // height={60}
                alt="Compnay-logo"
              />
            </Navbar.Brand>
          </div>
        </DrawerHeader>

        <div className='text-center py-3' >
            <img src={avt} alt="Avatar" className="img-fluid full-round avt-image" />
        </div>
        {/* <Divider /> */}
        <List>
          {/* {navitems.map((item, index) => ( */}
           
            {appState.user.role === "Host" && (
              <>

              <ListItem  disablePadding>
                <NavLink to="/profile/my-bookings" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                <ListItemButton>
                  <HomeIcon className='me-2' /> 
                    My Bookings 
                </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem disablePadding>
                <NavLink to="/profile" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                <ListItemButton>
                  <PersonIcon className='me-2' /> 
                    My Profile
                </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem  disablePadding>
                <NavLink to="/profile/my-properties" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                <ListItemButton>
                  <HomeIcon className='me-2' /> 
                    My Properties 
                </ListItemButton>
                </NavLink>
              </ListItem>

              <ListItem  disablePadding>
                <NavLink to="/profile/invoices" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                <ListItemButton>
                  <HomeIcon className='me-2' /> 
                    Invoices 
                </ListItemButton>
                </NavLink>
              </ListItem>
            
              <ListItem disablePadding>
                  <NavLink to="/profile/add-property" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                  <ListItemButton>
                      <AddHomeIcon className='me-2' /> 
                      Add Property
                  </ListItemButton>
                  </NavLink>
              </ListItem>
            </>
              )}
              {appState.user.role === "Tenant" && (
                <>
                  <ListItem disablePadding>
                    <NavLink to="/profile" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                    <ListItemButton>
                      {/* <ListItemIcon> */}
                        <PersonIcon className='me-2' /> 
                      {/* </ListItemIcon> */}
                        My Profile
                    </ListItemButton>
                    </NavLink>
                  </ListItem>

                  <ListItem  disablePadding>
                    <NavLink to="/my-reservations" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                    <ListItemButton>
                        <HomeIcon className='me-2' /> 
                      My Reservations 
                    </ListItemButton>
                    </NavLink>
                  </ListItem>

                  <ListItem  disablePadding>
                    <NavLink to="/profile/invoice-detail" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                    <ListItemButton>
                        <ArticleIcon className='me-2' /> 
                      Invice details
                    </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem  disablePadding>
                    <NavLink to="/profile/admin/my_properties" className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                    <ListItemButton>
                        <ArticleIcon className='me-2' /> 
                        My Properties 
                    </ListItemButton>
                    </NavLink>
                  </ListItem>
                </>
              
              )}
            <ListItem disablePadding>
              <NavLink to="/" onClick={handleLogout} className={({isActive}) => isActive ? 'drawer_btn active-bar w-100': 'drawer_btn w-100'}>
                <ListItemButton>
                  <LogoutIcon className='me-2' />
                  Logout
                </ListItemButton>
                </NavLink>
            </ListItem>
        </List>
        
      </Drawer>
      <Main open={open} className="profilelayout">
      <div className="container profile-container">
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            className="DrawerIcon"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
            {/* {children} */}
                <Outlet />
      </div>
      
        </Main>
        </Box>
    );
}

export default ProfileLayout