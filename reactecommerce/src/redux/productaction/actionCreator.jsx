import { SET_PRODUCTS, SET_TOTAL_PRICE } from "../actionType"

export const getProductsData = (data)=>(dispatch)=>{
    dispatch({
        type:SET_PRODUCTS,
        payload:data,
    }) 
}

export const setTotalPrice = (data)=>(dispatch)=>{
    dispatch({
        type:SET_TOTAL_PRICE,
        payload:data,
    }) 
}