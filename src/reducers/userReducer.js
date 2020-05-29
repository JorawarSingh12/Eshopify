export const userReducer=(state=initState,actions)=>{
    switch(actions.type){
        case "Wishlist_Added":
            console.log("yes")
            return state;
        case "Wishlist_Error":
            console.log(actions.err) 
            return state  
        case "Product_Added":
            console.log("added")
            return state
        case "Product_Error":
            console.log("Error",actions.err)
            return state
        default:
            return state
        }
    
}
const initState={}