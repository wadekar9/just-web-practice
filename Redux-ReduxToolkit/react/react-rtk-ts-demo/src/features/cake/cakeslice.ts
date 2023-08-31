import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IntialState = {
    numOfCakes : number
}

const initialState : IntialState = {
    numOfCakes :  100
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers : {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked : (state,action : PayloadAction<number>) => {
            state.numOfCakes += action.payload
        }
    }
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;