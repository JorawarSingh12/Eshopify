import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import MaterialCard from '../MaterialCard'
import {Grid, Button} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import {Redirect, NavLink} from 'react-router-dom'
class Cart extends Component {
    render() {
        if(!this.props.uid)
        return (<Redirect to="/signin"></Redirect>)

        const skeletonCard=(<Grid item >
            <Skeleton animation="wave" variant="text" width={380} height={40}/>
            <Skeleton animation={false} variant="rect" width={380} height={368} />
            </Grid>)
                
                if(!this.props.cart)
                    return (
                <Grid container spacing={3} style={{marginTop:60}}>
                    
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                    {skeletonCard}
                </Grid>
                    )
        
        const productList=this.props.cart.length===0?<div>No product in cart !</div>:this.props.cart[0].product.map(product=>{
            return (
                <Grid key={product.id}  item lg={3} sm={12} xs={12} md={6}>
                <MaterialCard product={product} uid={this.props.uid}></MaterialCard>
                </Grid>
                
            )
        })
        return ( 
            <div>  
                  <Button variant="contained" color="secondary" size="large" style={{marginTop: 40}}>
                         <NavLink to="/Eshopify/payment"  style={{textDecoration:"none",color:"white"}}>
                            Order Now
                         </NavLink>
                   </Button>
                <Grid container style={{ marginTop:40}}>                
                {productList}
                </Grid>
           </div>

        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return ({
        uid: state.firebase.auth.uid,
        cart: state.firestore.ordered.cart?state.firestore.ordered.cart.filter(product=>product.id===state.firebase.auth.uid):null,
        
        
    })
}


export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'cart'},
    
  ])
      )(Cart)