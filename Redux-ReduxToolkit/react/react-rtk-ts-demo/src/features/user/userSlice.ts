import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type userElement = { 
    id : number
    name : string
}

type IntialState = {
    loading : boolean
    users : userElement[]
    error : string
}

const intialState: IntialState = {
    loading : false,
    users : [],
    error : ''
}

//Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
})

const userSlice = createSlice({
    name : 'user',
    initialState : intialState,
    reducers : {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<userElement[]>) => {
            state.loading = false
            state.users = action.payload,
            state.error = ''
        }),
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || ''
        })
    }
});

export default userSlice.reducer;