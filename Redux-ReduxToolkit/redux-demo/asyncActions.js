const { default: axios } = require('axios');
const redux = require('redux');
const reduxThunkMiddleware = require('redux-thunk');

const { applyMiddleware, legacy_createStore, combineReducers } = redux;


const intialState = {
    loading : false,
    data : [],
    error : ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (data = []) => {
    return {
        type : FETCH_USERS_SUCCEEDED,
        payload : data
    }
}

const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILED,
        payload : error
    }
}

const Reducer = (state = intialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED : 
            return {
                ...state,
                loading : true
            }

        case FETCH_USERS_SUCCEEDED : 
            return {
                ...state,
                loading : false,
                data : action.payload
            }

        case FETCH_USERS_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        default : return state;
    }

}

//Async Actions


const fetchUsers = () => {
    return async function (dispatch){

        dispatch(fetchUsersRequest());

        await axios.get('https://jsonplaceholder.typicode.com/uses')
        .then((response) => {
            const users = response.data.map((user) => user.id);

            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            dispatch(fetchUsersFailure(error.message))
            // console.log(error?.response)
        })

    }
}

//Store 
const rootStore = legacy_createStore(Reducer, applyMiddleware(reduxThunkMiddleware.default))


const unsubcribe = rootStore.subscribe(() => console.log("Current State------>", rootStore.getState()))

rootStore.dispatch(fetchUsers());

// unsubcribe();