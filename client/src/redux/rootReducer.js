const initialState = {
    loading: true,
    cartItems:[]
}

export const rootRuducer = (state=initialState, action) =>{
 switch(action.type){
    case "SHOW_LOADING":
        return{
            ...state,
            loading:true
        }

    case "HIDE_LOADING":
        return{
            ...state,
            loading:false
        }

    case 'ADD_TO_CART':
    return {
        ...state,
        cartItems:[...state.cartItems, action.payload]
    }

    case "UPDATE_CART":
        return {
            ...state,
            cartItems:state.cartItems.map((item) => item._id === action.payload._id ? {...item,
                quantity:action.payload.quantity} : item)
        }

    default: return state
    case "DELETE_FROM-CARD":
        return {
            ...state,
            cartItems:state.cartItems.filter((item) => item._id !== action.payload._id )
        }
 }   
}