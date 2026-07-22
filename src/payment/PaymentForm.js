import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({cardDetails,changecardDetails}) {

  const changeHandler=(e)=>{
    let value = e.target.value;
    // SECURITY: Limit CVV to max 4 digits to prevent buffer overflow/malicious payloads
    // and satisfy PCI-DSS format restrictions.
    if (e.target.name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }
    changecardDetails({
      ...cardDetails,
      [e.target.name]: value
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
          {/* SECURITY: CVV is sensitive authentication data (SAD) and must be masked via type="password" */}
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            name="cvv"
            type="password"
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
