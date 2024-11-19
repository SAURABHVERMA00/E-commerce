import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ALL_ORDERS_BY_REQUEST,
  GET_ALL_ORDERS_BY_FAILURE,
  GET_ALL_ORDERS_BY_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
 
} from "./actionType";
import { api } from "../../config/APIConfig";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  
  try {

    const { data } = await api.post(`/api/orders`, reqData.address);
  
    
    if (data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` });
    } 

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};




export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  
    try {
      const { data } = await api.get(`/api/orders/${orderId}`);
  
     
  
      dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
    }
  };
  
export const getAllPlacedOrder=()=>async(dispatch)=>{
  dispatch({type:GET_ALL_ORDERS_BY_REQUEST});
  try{
    const {data}=await api.get(`/api/orders/user`);

    // console.log("Order data", data);
    dispatch({type:GET_ALL_ORDERS_BY_SUCCESS,payload:data});
  }catch(error){
    dispatch({type:GET_ALL_ORDERS_BY_FAILURE,payload:error.message});
  }
}