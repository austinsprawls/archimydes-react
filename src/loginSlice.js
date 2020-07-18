import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        firstName: '',
        lastName: '',
        role: '',
        token: ''
    },
    reducers: {
        setCredentials: (state, action) => {
            console.log("setting creds: ", action)
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = action.payload.role;
            state.token = action.payload.token;
        }
    }
});

export const { setCredentials } = loginSlice.actions;

export const login = (email, password, isAdmin = false) => async dispatch => {
    const response = await fetch('http://localhost:3000/api/v1/signin', {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
            isAdmin
        }),
        headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();

    dispatch(setCredentials(json));

}

export default loginSlice.reducer;