import React from 'react'
import {Typography,Link} from '@material-ui/core'

export default function Footer() {
    return (
      <Typography variant="body2"  align="center" style={{marginTop: "100px"}}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Eshopify
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

