import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "../style/NavBar.css"
import Logo from "../images/logo-1.png"
import { Link as LinkRouter } from 'react-router-dom';

const NavLinks = [
          
           {
              name: "Cities",
              path: "/Cities"
          }
          
          ]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='NavBar' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <LinkRouter to={"/Home"}>
                <div className="logoYtext">
                     {/* <img className="Logo" alt= "Logo de empresa"src={Logo}/> */}
                         <h1 className="MyItinerary">MyTinerary</h1>
                    </div>
                </LinkRouter>
                </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {NavLinks.map((page,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <LinkRouter to={page.path}>
                  <div className="NavLi">
                  <Typography textAlign="center">
                    {page.name}
                    </Typography>
                    </div>
                  </LinkRouter>
                </MenuItem>
             
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <LinkRouter to={"/Home"}>
                <div className="logoYtext">
                     <img className="Logo" alt="Logo de empresa"src={Logo}/>
                         <h3 className="MyItinerary">MyTinerary</h3>
                    </div>
                </LinkRouter>
                </Box> 
                  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {NavLinks.map((page,index) => (
              
              <LinkRouter to={page.path}>
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', size:"20px" }}
              >
                 <div className="NavLi">
                {page.name}
                </div>
              </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 3}}>
                <PersonOutlineRoundedIcon className="User" alt="Remy Sharp" sx={{ fontSize: 40}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '60px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <div className="NavLi">
                  <Typography textAlign="center" color="black" >{setting}</Typography>
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;




