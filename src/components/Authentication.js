import React, { Component } from 'react'
import firebase from '../config/fbConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Authentication extends Component {
  constructor(props) {
  super(props)
    this.state = {
      uiConfig :{
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            
            return true;
          },
          uiShown: function() {
            
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '/Eshopify',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
               
        ],
        // Terms of service url.
        tosUrl: '/service',
        // Privacy policy url.
        privacyPolicyUrl: '/policy'
      }
    }
  }

  render() {
    if(this.props.uid)
            return (<Redirect to="/Eshopify"></Redirect>)
    return (
      <div >
        <StyledFirebaseAuth uiConfig={this.state.uiConfig} firebaseAuth={firebase.auth()}/>
        <div id="loader">Loading...</div>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return ({
    uid: state.firebase.auth.uid,
    
  } )
  
}
export default connect(mapStateToProps) (Authentication)