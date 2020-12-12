import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    paddingTop: 20
  },
});

export default function SideDrawer({open,toggleDrawer}) {
  const classes = useStyles();
 

  const list = (
    <div
    className={classes.list}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List className={classes.fullList}>
        <MenuItem ><ListItemIcon><LaptopMacIcon/></ListItemIcon><NavLink to="/Eshopify/category/Laptops" style={{ textDecoration: 'none',color:"black"}}>Laptops</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><CardGiftcardIcon/></ListItemIcon><NavLink to="/Eshopify/category/Mobiles" style={{ textDecoration: 'none',color:"black"}}>Mobiles</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FilterNoneIcon/></ListItemIcon><NavLink to="/Eshopify/category/Accessories" style={{ textDecoration: 'none',color:"black"}}>Accessories</NavLink></MenuItem>
      </List>
      <Divider />
      <List>
      <MenuItem ><ListItemIcon><ShoppingCartIcon/></ListItemIcon> <NavLink to="/Eshopify/cart" style={{ textDecoration: 'none',color:"black"}}>Your Cart</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FavoriteIcon/></ListItemIcon><NavLink to="/Eshopify/wishlist" style={{ textDecoration: 'none',color:"black"}}>Wishlist</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><ReceiptIcon/></ListItemIcon><NavLink to="/Eshopify/orders" style={{ textDecoration: 'none',color:"black"}}>Orders</NavLink></MenuItem>
      </List>
    </div>
  );
  return (
    <div>
            
        <React.Fragment >
          <Drawer open={open} anchor='left' onClose={toggleDrawer( false)}>
            {list}
          </Drawer>
        </React.Fragment>
    
    </div>
  );
}
