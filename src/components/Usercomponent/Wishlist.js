import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import MaterialCard from '../MaterialCard'
import {Grid} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import {Redirect} from 'react-router-dom'
class Wishlist extends Component {
    render() {
        if(!this.props.uid)
        return (<Redirect to="/signin"></Redirect>)

        const skeletonCard=(<Grid item >
            <Skeleton animation="wave" variant="text" width={380} height={40}/>
            <Skeleton animation={false} variant="rect" width={380} height={368} />
            </Grid>)
                
                if(!this.props.wishlist)
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
        
        const productList=this.props.wishlist.length===0?<div>No product in Wishlist !</div>:this.props.wishlist[0].product.map(product=>{
            return (
                <Grid key={product.id}  item lg={3} sm={12} xs={12} md={6}>
                <MaterialCard product={product} uid={this.props.uid} isWishlisted={true}></MaterialCard>
                </Grid>
            )
        })
        return ( 
           <Grid container style={{ marginTop:40}}>                
           {productList}
           </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return ({
        uid: state.firebase.auth.uid,
        wishlist: state.firestore.ordered.wishlist?state.firestore.ordered.wishlist.filter(product=>product.id===state.firebase.auth.uid):null,
        
        
    })
}


export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'wishlist'},
    
  ])
      )(Wishlist)