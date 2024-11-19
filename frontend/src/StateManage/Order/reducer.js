import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ALL_ORDERS_BY_FAILURE,
  GET_ALL_ORDERS_BY_REQUEST,
  GET_ALL_ORDERS_BY_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./actionType";

const intialState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ORDER_BY_ID_REQUEST:
    case GET_ALL_ORDERS_BY_REQUEST:
      return { ...state, loading: true, error: null };

    case CREATE_ORDER_SUCCESS:
      return { ...state, order: action.payload, loading: false, success:true,error: null };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, order: action.payload, loading: false, error: null };
    case GET_ALL_ORDERS_BY_SUCCESS:
      return { ...state, orders: action.payload, loading: false, error: null };
    

    case CREATE_ORDER_FAILURE:
    case GET_ORDER_BY_ID_FAILURE:
    case GET_ALL_ORDERS_BY_FAILURE: 
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
