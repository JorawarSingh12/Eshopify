export const addtoWishlist= (product)=>{
    console.log(product)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        console.log(dispatch)
        const firestore=getFirestore()
        firestore.collection('wishlist').add({
           
            Title: product,
            createdAt: new Date()
        }).then(()=>{
          dispatch({type:"Wishlist_Addded"}) 
        }).catch((err)=>{
            dispatch({type:"Wishlist_Error"})
        })
        
    }
}