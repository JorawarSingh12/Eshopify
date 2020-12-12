import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
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
    padding: 42,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  iconbutton: {
    position: "absolute",
    right: 30
  }
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
      
        <MenuItem onClick={handleMenuClose}><ListItemIcon><ShoppingCartIcon/></ListItemIcon> <NavLink to="/Eshopify/cart" style={{ textDecoration: 'none',color:"black"}}>Your Cart</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><FavoriteIcon/></ListItemIcon><NavLink to="/Eshopify/wishlist" style={{ textDecoration: 'none',color:"black"}}>Wishlist</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><ReceiptIcon/></ListItemIcon><NavLink to="/Eshopify/orders" style={{ textDecoration: 'none',color:"black"}}>Orders</NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><BusinessIcon/></ListItemIcon><NavLink to="/Eshopify/becomeSeller" style={{ textDecoration: 'none',color:"black"}}>Become Seller</NavLink></MenuItem>
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
      
        <MenuItem onClick={handleMenuClose}><ListItemIcon><AccountBoxIcon/></ListItemIcon><NavLink to="/Eshopify/signin" style={{ textDecoration: 'none',color:"black"}}>SignUp </NavLink></MenuItem>
        <MenuItem onClick={handleMenuClose}><ListItemIcon><AccountBoxIcon/></ListItemIcon><NavLink to="/Eshopify/signin" style={{ textDecoration: 'none',color:"black"}}>SignIn </NavLink></MenuItem>        
        </Menu>  
    }
   
    const userName=props.userName?<Typography style={{paddingTop:10,paddingRight:10}}> {props.userName}</Typography>:null
    const sidebar = props.isLoggedIn?
    <Fragment>
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
          
        </Fragment>
          :null
  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
      <Toolbar  className={classes.toolbar}>  
          {sidebar}
          <Typography align="center" variant="h5"><NavLink to="/eshopify" style={{ textDecoration: 'none',color:"white"}}>Eshopify</NavLink> </Typography>
          <IconButton 
          className={classes.iconbutton}
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
         
      isLoggedIn: !(isEmpty),
   } 
  )
}



export default   connect(mapStateToProps) (Header)