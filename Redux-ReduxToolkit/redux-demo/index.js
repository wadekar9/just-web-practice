const redux = require('redux');
const reduxLogger = require('redux-logger');

const { legacy_createStore, combineReducers, applyMiddleware, bindActionCreators } = redux;
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';  // <---- Action type
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

//Action creater
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty || 10
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}

function restockIceCream(qty) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty || 10
    }
}

//Application intial State
const intialCakeReducer = {
    numOfCakes: 10
}

const intialIceCreamState = {
    numOfIceCreams: 100
}

//Reducer
const CakeReducer = (state = intialCakeReducer, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state;
    }
}

const IceCreamReducer = (state = intialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        default:
            return state;
    }
}

const RootReducer = combineReducers({
    cake : CakeReducer,
    iceCream : IceCreamReducer
})

//Store
const REDUX_STORE = legacy_createStore(RootReducer, applyMiddleware(logger));

console.log(REDUX_STORE.getState(), "Intial state --->");

const unsubscribe = REDUX_STORE.subscribe(() => {});

// REDUX_STORE.dispatch(orderCake());
// REDUX_STORE.dispatch(orderCake());
// REDUX_STORE.dispatch(orderCake());

// REDUX_STORE.dispatch(restockCake());
// REDUX_STORE.dispatch(restockCake(50));

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, REDUX_STORE.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake();
actions.restockCake(400)

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(1000);
actions.restockIceCream(-100);

unsubscribe();