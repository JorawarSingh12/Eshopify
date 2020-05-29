import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom'
import {Menu} from '@material-ui/core'
import SideDrawer from './SideDrawer'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BusinessIcon from '@material-ui/icons/Business';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {connect} from 'react-redux'
import firebase from '../config/fbConfig'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolbar: {
    minHeight: 128,

    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

 function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler=()=>{
    handleMenuClose()
    firebase.auth().signOut();
  
  }

  const menuId = 'primary-search-account-menu';
  let renderMenu;
    if(props.isLoggedIn){
      renderMenu=<Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
        <MenuItem onClick={handleMenuClose}><ListItemIcon><ShoppingCartIcon/></ListItemIcon> <NavLink to="/cart" style={{ textDecoration: 'none',color:"black"}}>Your Cart</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><FavoriteIcon/></ListItemIcon><NavLink to="/wishlist" style={{ textDecoration: 'none',color:"black"}}>Wishlist</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><ReceiptIcon/></ListItemIcon><NavLink to="/orders" style={{ textDecoration: 'none',color:"black"}}>Orders</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><BusinessIcon/></ListItemIcon><NavLink to="/becomeSeller" style={{ textDecoration: 'none',color:"black"}}>Become Seller</NavLink></MenuItem>
        <MenuItem onClick={logoutHandler}><ListItemIcon><ExitToAppIcon/></ListItemIcon>LogOut</MenuItem>
        </Menu>  
      }
    else{
      renderMenu=<Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
        <MenuItem onClick={handleMenuClose}><ListItemIcon><AccountBoxIcon/></ListItemIcon><NavLink to="/signin" style={{ textDecoration: 'none',color:"black"}}>SignUp </NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><AccountBoxIcon/></ListItemIcon><NavLink to="/signin" style={{ textDecoration: 'none',color:"black"}}>SignIn </NavLink></MenuItem>        
        </Menu>  
    }


  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer open={open} toggleDrawer={toggleDrawer} ></SideDrawer>
          <Typography className={classes.title} variant="h5" noWrap>
           <NavLink to="/eshopify" style={{ textDecoration: 'none',color:"white"}}> Eshopify</NavLink>
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton 
          aria-label="display more actions" 
          edge="end" 
          color="inherit"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}>
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}


const mapStateToProps=(state)=>{

  const isEmpty=state.firebase.auth.isEmpty
  return (
   {
      isLoggedIn: !(isEmpty)
   } 
  )
}



export default   connect(mapStateToProps) (Header)