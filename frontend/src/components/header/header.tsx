'use client'

import logo from '@/image/logo.svg';
import { faBagShopping, faBell, faBook, faFileLines, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, createTheme, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';


const pages = ['Popular', 'Ban List', 'Limited', 'Contact'];
const settings = ['Profile', 'Order History', 'My Album', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Link href={`/`}>
                <Image src={logo} alt='logo' width={150} height={50} />
              </Link>
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Link href={`/`}>
                <Image src={logo} alt='logo' width={150} height={50} style={{ marginRight: '10px' }} />
              </Link>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Link href={'/cart'}>
                <IconButton>
                  <Badge badgeContent={17} color="error">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton sx={{ margin: '0 30px' }}>
                <Badge badgeContent={17} color="error">
                  <FontAwesomeIcon icon={faBell} />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Hoang" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '55px' }}
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
                {/* {settings.map((setting) => ( */}
                <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                  <FontAwesomeIcon icon={faUser} /><Typography textAlign="center" sx={{ marginLeft: '10px' }}>Profile</Typography>
                </MenuItem>
                <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                  <FontAwesomeIcon icon={faFileLines} /><Typography textAlign="center" sx={{ marginLeft: '10px' }}>Order History</Typography>
                </MenuItem>
                <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                  <FontAwesomeIcon icon={faBook} /><Typography textAlign="center" sx={{ marginLeft: '10px' }}>My Album</Typography>
                </MenuItem>
                <MenuItem key='Profile' onClick={handleCloseUserMenu}>
                  <FontAwesomeIcon icon={faRightFromBracket} /><Typography textAlign="center" sx={{ marginLeft: '10px' }}>Log out</Typography>
                </MenuItem>
                {/* ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
