import {api} from "../../config/APIConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./actionType";
export const findProducts = (reqData) => async (dispatch) => {


dispatch({type: FIND_PRODUCTS_REQUEST});
  const {
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber, 
    pageSize,
  } = reqData;
  
  try {
    const {data}=await api.get(`/api/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)



   
    dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data});

  } catch (err) {
    dispatch({type: FIND_PRODUCTS_FAILURE, payload: err.message});
  }
};


export const findProductById = (reqData) => async (dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST});
      const {productId} = reqData;
     
      try {
        const {data}=await api.get(`/api/products/id/${productId}`,)

        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data});
    
      } catch (err) {
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: err.message});
      }
    };
    