const { cakeActions } = require('../cake/cakeslice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = { 
    numOfIceCreams : 200
}

const iceCreamSlice = createSlice({
    name : 'IceCream',
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCreams--;
        },
        restocked : (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;