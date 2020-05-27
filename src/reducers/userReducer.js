export const userReducer=(state=initState,actions)=>{
    switch(actions.type){
        case "Wishlist_Added":
            console.log("yes")
            return state;
        case "Wishlist_Error":
            console.log(actions.err) 
            return state  
        default:
            return state
        }
    
}
const initState={}