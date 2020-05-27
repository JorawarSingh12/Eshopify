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
import BusinessIcon from '@material-ui/icons/Business';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
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

         <MenuItem><ListItemIcon><WhatshotIcon/></ListItemIcon> <NavLink to="/todaysale" style={{ textDecoration: 'none',color:"black"}}>Today's Sale</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><CardGiftcardIcon/></ListItemIcon><NavLink to="/category/fashionwear" style={{ textDecoration: 'none',color:"black"}}>Fashionwear</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FastfoodIcon/></ListItemIcon><NavLink to="/category/groceries" style={{ textDecoration: 'none',color:"black"}}>Groceries</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><LaptopMacIcon/></ListItemIcon><NavLink to="/category/electronics" style={{ textDecoration: 'none',color:"black"}}>Electronics</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FavoriteIcon/></ListItemIcon><NavLink to="/category/accessories" style={{ textDecoration: 'none',color:"black"}}>Accessories</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FilterNoneIcon/></ListItemIcon><NavLink to="/category/paintings" style={{ textDecoration: 'none',color:"black"}}>Paintings</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><EmojiPeopleIcon/></ListItemIcon><NavLink to="/category/kids" style={{ textDecoration: 'none',color:"black"}}>Kids</NavLink></MenuItem>
      </List>
      <Divider />
      <List>
      <MenuItem ><ListItemIcon><ShoppingCartIcon/></ListItemIcon> <NavLink to="/cart" style={{ textDecoration: 'none',color:"black"}}>Your Cart</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><FavoriteIcon/></ListItemIcon><NavLink to="/wishlist" style={{ textDecoration: 'none',color:"black"}}>Wishlist</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><ReceiptIcon/></ListItemIcon><NavLink to="/orders" style={{ textDecoration: 'none',color:"black"}}>Orders</NavLink></MenuItem>
        <MenuItem ><ListItemIcon><BusinessIcon/></ListItemIcon><NavLink to="/offers" style={{ textDecoration: 'none',color:"black"}}>Special Offers</NavLink></MenuItem>
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
