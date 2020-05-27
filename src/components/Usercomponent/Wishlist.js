import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


class Wishlist extends Component {
    render() {
       
        return (
            <div>
                Hello wishlist                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        products: state.firestore.ordered.products
    })
}


export default compose(
    connect(mapStateToProps),
  firestoreConnect([
    {collection: 'wishlist'},
    {collection: 'products'}
  ])
      )(Wishlist)