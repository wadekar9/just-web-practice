import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cakeActions } from '../cake/cakeslice';

type IntialState = {
    numOfIceCreams : number
}

const initialState: IntialState = { 
    numOfIceCreams : 200
}

const iceCreamSlice = createSlice({
    name : 'IceCream',
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCreams--;
        },
        restocked : (state, action: PayloadAction<number>) => {
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

export default iceCreamSlice.reducer;
export const iceCreamActions = iceCreamSlice.actions;