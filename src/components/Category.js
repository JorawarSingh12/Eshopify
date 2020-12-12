import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid,Paper,Typography} from '@material-ui/core'
import MaterialCard from './MaterialCard'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Skeleton from '@material-ui/lab/Skeleton';

class Category extends Component {
    render() {
        const skeletonCard=(<Grid item >
            <Skeleton animation="wave" variant="text" width={380} height={40}/>
            <Skeleton animation={false} variant="rect" width={380} height={368} />
    
            
            </Grid>)
        const categoryOs=this.props.match.params.category;

        
        
                if(!this.props.categories[categoryOs] || ! this.props.wishlist || !this.props.wishlist[0].product)
                    return (
                <Grid container spacing={3} style={{marginTop:60,marginLeft: 10}}>
                    
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

        
        const categoryList=
        <div style={{marginBottom:50,marginLeft:10,marginRight:10}}>
        <Paper elevation={3} style={{padding:20,marginTop:40,marginBottom: 30,paddingLeft: 50} } ><Typography variant="body1" color="primary" align="left">{categoryOs.toUpperCase()}</Typography></Paper>
        <Grid container   style={{ marginTop:40}} >
        {
            this.props.categories[categoryOs].map((product,index)=>{
                const x=this.props.wishlist[0].product.filter(a=>a.id===product.id)
                const isWishlisted=x.length===1?true:false
                return(
                    
                    <Grid key={index} item lg={3} sm={12} xs={12} md={6}  >
                    <MaterialCard  product={product} uid={this.props.uid} isWishlisted={isWishlisted}></MaterialCard>
                    </Grid>
                   
                )
            })
        }
         </Grid>
    </div>

        return (
            <div>
              {categoryList}  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return ({
        uid: state.firebase.auth.uid,
        categories:state.firestore.ordered?state.firestore.ordered:null,
        wishlist:state.firestore.ordered.wishlist?state.firestore.ordered.wishlist.filter((doc)=>doc.id===state.firebase.auth.uid):null,

 })   
}



export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'laptops'},
    {collection: 'mobiles'},
    {collection: 'accessories'},
  ])
      )(Category)