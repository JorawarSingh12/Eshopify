export const createProduct=(product,uid)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>
    {
        
           const firestore=getFirestore();
          firestore.collection(product.type).add({
              title: product.title,
              Brand: product.Brand,
              description:product.description,
              price:product.price
            
            })
          .then(()=>dispatch({type:"Product_Added"}))
           .catch((err)=> dispatch({type:"Product_Error",err}))   
    }
}
