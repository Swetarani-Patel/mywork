import { SET_PRODUCTS } from "../actionType"

export const getProductsData = (data)=>(dispatch)=>{
    dispatch({
        type:SET_PRODUCTS,
        payload:data,
    }) 
}

