import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeslice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';
import { createLogger } from 'redux-logger';

//Middleware
const logger =  createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userReducer
    },
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;