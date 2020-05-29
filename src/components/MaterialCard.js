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
import { Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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

 function MaterialCard({product,addtoWishlist,removefromWishlist,uid,addToCart,isWishlisted}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 // console.log(isWishlisted)
  const [cart,setCart]=React.useState(null)
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const wishlistHandler=()=>{
    
    if(isWishlisted===true)
    {
      removefromWishlist(product,uid)
    }
    else{
      
      addtoWishlist(product,uid)
    }
    setOpen(true)
  }
  const cartHandler=()=>{
    
    addToCart(product,uid)
    setCart(true)
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
        image= {product.link?product.link: "image.jpg"}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={isWishlisted?"secondary":"white"}  onClick={wishlistHandler}>
          <FavoriteIcon  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         <Button color="primary" variant="contained" size="large" style={{margin:15,marginLeft:160,padding:10}} onClick={cartHandler}>{cart?<CheckCircleIcon/>:null}  {product.price}</Button>       
      </CardActions>

    <SnackbarComponent open={open} handleClose={handleClose} title={product.title} variant="contained" color={isWishlisted} ></SnackbarComponent>
    </Card>
    
  );
}

const mapDispatchToProps=(dispatch)=>{
  return({
    addtoWishlist:(product,uid)=> dispatch(addtoWishlist(product,uid)),
    removefromWishlist:(product,uid)=> dispatch(removefromWishlist(product,uid)),
    addToCart:(product,uid)=>dispatch(addtoCart(product,uid)),
    
  } )
 
}

export default 
  connect(null,mapDispatchToProps)
    (MaterialCard)
