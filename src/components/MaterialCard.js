import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import SnackbarComponent from '../components/SnackbarComponent'
import CardActionArea from '@material-ui/core/CardActionArea';
import { addtoWishlist,removefromWishlist, addtoCart } from '../actions/userActions';
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
   marginBottom:30,
   maxWidth:350
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

 function MaterialCard({product,addtoWishlist,removefromWishlist,uid,addToCart}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const wishlistHandler=()=>{
    if(color===true)
    {
      setColor(false)
      removefromWishlist(product,uid)
    }
    else{
      setColor(true)
      addtoWishlist(product,uid)
    }
    setOpen(true)
    

  }
  const cartHandler=()=>{
    addToCart(product,uid)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {product.Brand[0]}
          </Avatar>
        }
       
        title={product.title}
        subheader={product.Brand}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"  onClick={wishlistHandler}>
          <FavoriteIcon  color={color?"secondary":"inherit"}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         <Button color="primary" variant="contained" size="large" style={{margin:15,marginLeft:160}} onClick={cartHandler}> {product.price}</Button>       
      </CardActions>

    <SnackbarComponent open={open} handleClose={handleClose} title={product.title} color={color} variant="contained"></SnackbarComponent>
    </Card>
    
  );
}

const mapDispatchToProps=(dispatch)=>{
  return({
    addtoWishlist:(product,uid)=> dispatch(addtoWishlist(product,uid)),
    removefromWishlist:(product,uid)=> dispatch(removefromWishlist(product,uid)),
    addToCart:(product,uid)=>dispatch(addtoCart(product,uid))
  } )
 
}

export default compose(
  connect(null,mapDispatchToProps),
firestoreConnect([
  {collection: 'wishlist'}
])
    )(MaterialCard)
