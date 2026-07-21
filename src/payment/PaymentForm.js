import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({cardDetails,changecardDetails}) {

  const changeHandler=(e)=>{
    let val = e.target.value;
    if (e.target.name === 'cvv') {
      // CVV format restriction: allow only numbers, up to 4 digits
      val = val.replace(/\D/g, '').slice(0, 4);
    }
    changecardDetails({
      ...cardDetails,
      [e.target.name]: val
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" name="cardName" value={cardDetails.cardName}  label="Name on card" fullWidth onChange={changeHandler}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" name="cardNumber" label="Card number" value={cardDetails.cardNumber}  fullWidth onChange={changeHandler}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" name="expDate" label="Expiry date" value={cardDetails.expDate} fullWidth onChange={changeHandler}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            type="password"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            name="cvv"
            value={cardDetails.cvv || ''}
            onChange={changeHandler}
            inputProps={{
              maxLength: 4,
              pattern: '[0-9]*',
              inputMode: 'numeric'
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}