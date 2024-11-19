import {api} from '../../config/APIConfig'
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_SUCCESS } from './actionType'



export const createPayment=(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})

    try{    
        const {data}=await api.post(`/api/payments/${orderId}`,{});

        if(data.paymentLinkUrl){
            dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data.paymentLinkUrl });
            window.location.href=data.paymentLinkUrl;

        }
    }catch(error){
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}


export const updatePaymentInformation=(reqData)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})
    try{
        const {data}=await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId }`);
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
        

    }catch(error){
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }

}