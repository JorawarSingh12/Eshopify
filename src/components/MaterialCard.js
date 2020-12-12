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
   maxWidth:350,
   height:350,
   backgroundColor: '#f4f4f2',
   marginBottom: 40,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
 
}));

 function MaterialCard({product,addtoWishlist,removefromWishlist,uid,addToCart,isWishlisted}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpen2(false);
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
    
    setOpen2(true)
    addToCart(product,uid)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image= {product.link?product.link: "image.jpg"}
        title={product.title}
      />
  <CardHeader
       
       title={product.title}
     />
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={isWishlisted?"primary":"default"}  onClick={wishlistHandler}>
          <FavoriteIcon  />
        </IconButton>
        
         <Button color="secondary" variant="contained" size="large" style={{margin:15,marginLeft:200,padding:10}} onClick={cartHandler}>  {product.price}</Button>       
      </CardActions>

    <SnackbarComponent open={open} handleClose={handleClose} title={product.title} variant="contained" color={isWishlisted} ></SnackbarComponent>
    <SnackbarComponent open={open2} handleClose={handleClose} title={product.title} variant="contained" color="default"  ></SnackbarComponent>
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
