export const userReducer=(state=initState,actions)=>{
    switch(actions.type){
        case "Wishlist_Added":
            state.isWishlistError=false
          
            return state;
        case "Wishlist_Error":
            state.isWishlistError=true
      
            return state  
        case "Product_Added":
            state.isProductError=false
           
            return state
        case "Product_Error":
            state.isProductError=true
      
            return state
        case "Profile_Added":
            state.isProfileError=false
            return state
        case "Profile_Error":
            state.isProfileError=true
            return state
        default:
            return state
        }
    
}
const initState={
    
    isProfileError:false,
    isWishlistError:false,
    isProductError:false
}