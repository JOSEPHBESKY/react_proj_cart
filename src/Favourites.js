import React,{useContext} from 'react'
import { stateContext } from './Context'
import { NavLink } from 'react-router-dom';
import "./style.scss"
import "./style.scss"
 import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
export default function Favourites() {
    const {state,dispatch}=useContext(stateContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    console.log(state);
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Cartidems</MenuItem>
          <MenuItem onClick={handleMenuClose}>Favorite</MenuItem>
          <MenuItem onClick={handleMenuClose}>Lockout</MenuItem>
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
              <NavLink to = "/Home" style={({isActive})=>isActive? {color : "red"} : null}><MapsHomeWorkRoundedIcon/></NavLink>   
              </Badge>
            </IconButton>
            <p>Home</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
              <NavLink to = "/Cart" style={({isActive})=>isActive? {color : "red"} : null}><AddShoppingCartRoundedIcon/></NavLink>
              </Badge>
            </IconButton>
            <p>Cartidems</p>
          </MenuItem>
          <MenuItem>
          <IconButton size='large'
          color='inherit'>
          <NavLink to = "/Favourites" style={({isActive})=>isActive? {color : "red"} : null}><FavoriteBorderIcon/></NavLink>
          </IconButton>
          <p>Favourites</p>
          </MenuItem>
          <MenuItem>
          <IconButton size='large'
          color='inherit'>
          <NavLink  style={({isActive})=>isActive? {color : "red"} : null} onClick={()=>logout()} to = "/"><LogoutRoundedIcon/></NavLink>
          </IconButton>
          <p>Logout</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
    const removeFavorite = (items) => {
        let dis = state.FavArr.splice(0,1)
        console.log(items);
        dispatch({
          type: "removefav",
          payload: dis
        });
      };
      const logout=()=>{
        localStorage.setItem("isLoggedIn",false)
        dispatch({
            type : "logout",
            payLoad : { isAuthenticated : false}
          })
        }
  return (
    <div>
    <div className='container'><div>   <Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      MUI
    </Typography>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
    <Box sx={{ flexGrow: 1 }} />
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton size="large"  color="inherit">
        <Badge  color="error">
        <NavLink to = "/Home" style={({isActive})=>isActive? {color : "red"} : null}><MapsHomeWorkRoundedIcon/></NavLink>
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
      >
        <Badge  color="error">
        <NavLink to = "/Cart" style={({isActive})=>isActive? {color : "red"} : null}><AddShoppingCartRoundedIcon/></NavLink>

        </Badge>
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
      >
        <Badge  color="error">
        <NavLink to = "/Favourites" style={({isActive})=>isActive? {color : "red"} : null}><FavoriteRoundedIcon/></NavLink>

        </Badge>
      </IconButton>
      <IconButton
      size="large"
      color="inherit"
    >
      <Badge  color="error">
      <NavLink  style={({isActive})=>isActive? {color : "red"} : null} onClick={()=>logout()} to = "/"><LogoutRoundedIcon/></NavLink>
      </Badge>
    </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Box>
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>
  </Toolbar>
</AppBar>
{renderMobileMenu}
{renderMenu}
</Box>

</div>
    <h1>FAVOURITES</h1>
    <div className='container'>
    {
        state?.FavArr?.map((products,index)=>(
            <div key={index} className='cars'><h1>{products.name}</h1><img src={products.img} alt="" className="image"></img><p className='price'>{products.price}</p>
            <button className="removefav" onClick={() => removeFavorite(products)}>
              Remove Favorite
            </button>
            </div>
        ))
    }
    </div>
    </div>
    </div>
  )
}