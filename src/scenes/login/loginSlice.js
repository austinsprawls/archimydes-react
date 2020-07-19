import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        firstName: '',
        lastName: '',
        role: '',
        token: '',
        isAuthenticated: false
    },
    reducers: {
        setCredentials: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        isAuthenticated: (state, action) => {
            console.log("is user auth: ", action)
            state.isAuthenticated = action.payload;
        } 
    }
});

export const { setCredentials, isAuthenticated } = loginSlice.actions;

export const login = (email, password, isAdmin) => async dispatch => {
    const body = JSON.stringify({
        email,
        password,
        isAdmin
    });

    const response = await fetch('http://localhost:3000/api/v1/signin', {
        method: 'post',
        body,
        headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();

    dispatch(setCredentials(json));

}

export const checkAuthentication = () => async dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('authToken')}`
    };
    const response = await fetch('http://localhost:3000/api/v1/stories', {
        headers
    });

    dispatch(isAuthenticated(response.ok));
}

export const selectRole = state => state.login.role;
export const selectAuthToken = state => state.login.token;

export default loginSlice.reducer;