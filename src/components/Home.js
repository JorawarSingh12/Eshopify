import React, { Component } from 'react'
import {Paper, Typography, Grid, CssBaseline} from '@material-ui/core'
import MaterialCard from './MaterialCard'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Skeleton from '@material-ui/lab/Skeleton';
import {Redirect} from 'react-router-dom'

export class Home extends Component {

    render() {
        
        if(!this.props.uid)
            return (<Redirect to="/Eshopify/signin"></Redirect>)
        const skeletonCard=(<Grid item >
        <Skeleton animation="wave" variant="text" width={380} height={40}/>
        <Skeleton animation={false} variant="rect" width={380} height={368} />

        
        </Grid>)
    
           
            if(!this.props.laptops ||  !this.props.mobiles || ! this.props.accessories)
                return (
            <Grid container spacing={3} style={{marginTop:60}}>
                
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}
                {skeletonCard}            
            </Grid>
                )    
        const items=['Laptops','Mobiles','Accessories'].map((item,index)=>{
            return (
                <div key={index} style={{marginBottom:30,marginLeft:10,marginRight:10}}>
                    <Paper  elevation={3} style={{padding:15,marginBottom: 20,paddingLeft: 30,backgroundColor: "#393e46",opacity:0.8 } } ><Typography variant="body1" color="primary" align="left">{item}</Typography></Paper>
                    <Grid container   style={{ marginTop:10}} >
                    {
                        this.props[item.toLowerCase()].map((product,index)=>{
                            const x= (this.props.wishlist && this.props.wishlist[0]) ?this.props.wishlist[0].product.filter(a=>a.id===product.id):0
                            const isWishlisted=x && x.length===1?true:false
                            return(       
                                <Grid key={index} item lg={3} sm={12} xs={12} md={6}  >
                                <MaterialCard  product={product} uid={this.props.uid} isWishlisted={isWishlisted}></MaterialCard>
                                </Grid>  
                            )
                        })
                    }
                     </Grid>
                    <CssBaseline></CssBaseline>
                </div>
            )
        })

        return (
            <div>
                {items}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return ({
      laptops: state.firestore.ordered.laptops?state.firestore.ordered.laptops:null ,
      mobiles: state.firestore.ordered.mobiles?state.firestore.ordered.mobiles:null,
      accessories: state.firestore.ordered.accessories?state.firestore.ordered.accessories:null ,
      uid: state.firebase.auth.uid,
      wishlist:state.firestore.ordered.wishlist?state.firestore.ordered.wishlist.filter((doc)=>doc.id===state.firebase.auth.uid):null,

     } )
  
  }
  
 

  export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'laptops'},
    {collection: 'mobiles'},
    {collection: 'accessories'},
    {collection: 'wishlist'},
    
  ])
      )(Home)
  