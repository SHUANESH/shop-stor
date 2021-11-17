import { ActionTypes } from "../contants/action-types";

const initialState = {
    products:[],
    signalProduct:{}
}
export const productReducer = (state = initialState , action) => {
   switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return{...state ,products:action.payload}

       case ActionTypes.SELECTED_PRODUCT:
            return{...state , signalProduct:{...action.payload}} 

       case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{...state , signalProduct:{}}    
            
        default:
            return state;
    }
}