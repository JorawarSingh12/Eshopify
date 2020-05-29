export const addtoWishlist=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection("wishlist").doc(uid).set({
              product:firestore.FieldValue.arrayUnion(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}

export const removefromWishlist=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection("wishlist").doc(uid).set({
              product:firestore.FieldValue.arrayRemove(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}


export const addtoOrders=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          //  product.isShipped=false
          //  product.isDelivered=false
         //  product.orderNumber=Math.round(Math.random()*10000)
          firestore.collection("orders").doc(uid).set({
              product:firestore.FieldValue.arrayUnion(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}


export const removefromOrders=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection("orders").doc(uid).set({
              product:firestore.FieldValue.arrayUnion(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}


export const addtoCart=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection("cart").doc(uid).set({
              product:firestore.FieldValue.arrayUnion(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}


export const removefromCart=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection("cart").doc(uid).set({
              product:firestore.FieldValue.arrayUnion(product)
            
            }, { merge: true })
          .then(()=>dispatch({type:"Wishlist_Added"}))
           .catch((err)=> dispatch({type:"Wishlist_Error",err}))   
    }
}

export const addUser=(user)=>{
  return (dispatch,getState,{getFirebase,getFirestore})=>
  {
      
         const firestore=getFirestore();
        firestore.collection("users").add(user)
                  .then(dispatch({type:"Profile_Added"}))
                  .catch((err)=> dispatch({type:"Profile_Error",err}))
    }

}