import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {CircularProgress} from '@material-ui/core' 
import { addtoOrders } from '../actions/userActions';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step,address,cardDetails,changeAddress,changecardDetails,cart) {
  switch (step) {
    case 0:
      return <AddressForm changeAddress={changeAddress} address={address}/>;
    case 1:
      return <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails}/>;
    case 2:
      return <Review address={address} cardDetails={cardDetails} cart={cart} />;
    default:
      throw new Error('Unknown step');
  }
}

 function Checkout({cart,addToOrder,uid}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [address,changeAddress]=React.useState({
    firstName:"",
    lastName:"",
    address1:"",
    address2:"",
    city:"",
    zip:"",
    country:"",
  })
  const [cardDetails,changecardDetails]=React.useState({
    cardName:"",
    cardNumber:"",
    expDate:"",
    cvv:"",
  })
  const handleNext = () => {
    
    if(activeStep===2)
    {
      cart[0].product.map(product=>addToOrder(product,uid)) 
    }
      setActiveStep(activeStep + 1)
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  if(!cart)
  return(
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"220px"}}>
      <CircularProgress color="secondary" ></CircularProgress>
  </div>
  )


if( cart.length===0 || cart[0].product.length===0)
  return (<div>Empty Cart</div>)
  
  
  
  return (
    <React.Fragment>
      <CssBaseline />
     
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #{Math.round(Math.random()*1000000)}. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep,address,cardDetails,changeAddress,changecardDetails,cart)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  
  return ({
    uid: state.firebase.auth.uid,
    cart:state.firestore.ordered.cart?state.firestore.ordered.cart.filter(product=>product.id===state.firebase.auth.uid):null
    
   } )

}
const mapDispatchToProps=(dispatch)=>{
  return ({
    addToOrder:(product,uid)=>dispatch(addtoOrders(product,uid))
  })
}
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
firestoreConnect([
  {collection: 'cart'}
])
    )(Checkout)
