import { SET_CART_ITEM } from "../actionType"

export const getCartItem = (data)=>(dispatch)=>{
    dispatch({
        type:SET_CART_ITEM,
        payload:data
    })
}