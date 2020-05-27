import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
    // try to call snackbar only once and not with each and every material card component
export default function CustomizedSnackbars({open,handleClose,title,color}) {
  const classes = useStyles();
  const alertMessage=color?(<Alert  severity="success">
  {title} Added to Wishlist
 </Alert>):
 (<Alert  severity="error">
 {title} Removed from  Wishlist
</Alert>)

  return (
    <div className={classes.root}>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        {alertMessage}
      </Snackbar>
    </div>
  );
}
