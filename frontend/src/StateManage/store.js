import {legacy_createStore,applyMiddleware, combineReducers} from 'redux'; 
import {thunk} from 'redux-thunk';
import { authReducer } from './Authentication/reducers';
import { customerProductReducers } from './Product/reducers';
import { cartReducer } from './Cart/reducers';
import { orderReducer } from './Order/reducer';
import paymentReducer from './Payment/reducer';


const rootReducers =combineReducers({
    auth:authReducer,
    products:customerProductReducers,
    cart:cartReducer,
    order:orderReducer,
    payment: paymentReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));