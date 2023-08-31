const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeslice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');
const userReducer = require('../features/user/userSlice');
const reduxLogger = require('redux-logger');

//Middleware
const logger =  reduxLogger.createLogger();

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userReducer
    },
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;