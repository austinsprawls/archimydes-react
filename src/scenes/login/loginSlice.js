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

export const login = (email, password, isAdmin) => async dispatch => {
    const body = JSON.stringify({
        email,
        password,
        isAdmin
    });
    console.log("body for lgoin: ", body)
    const response = await fetch('http://localhost:3000/api/v1/signin', {
        method: 'post',
        body,
        headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();

    dispatch(setCredentials(json));

}

export const selectRole = state => state.login.role;

export const selectAuthToken = state => state.login.token;

export default loginSlice.reducer;