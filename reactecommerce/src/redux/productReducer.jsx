import { SET_PRODUCTS, SET_TOTAL_PRICE } from "./actionType";
let total = 0;
let localArr = JSON.parse(localStorage.getItem('cart'))||[]
localArr.map((ele)=>{
    let quantity = localStorage.getItem(`quantity_${ele.id}`) || 1
total += ele.price * quantity;
})
console.log(total);
let initData = {
    product:[],
    totalprice:total,
}
const productReducer = (state=initData, action)=>{
    if(action.type === SET_PRODUCTS){
        return {...state,
            product:action.payload,

        }
    }else if(action.type === SET_TOTAL_PRICE){
        return{...state,
            totalprice:action.payload,
        }
    }
    return state;
}
export default productReducer;