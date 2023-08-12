import { SET_PRODUCTS } from "./actionType"

export const getProductsData = (data)=>{
    return {
        type:SET_PRODUCTS,
        payload:data,
    }
}