import { createSlice } from '@reduxjs/toolkit';
import fetch from 'node-fetch';

export const createStorySlice = createSlice({
    name: 'createStory',
    initialState: {
        isSuccess: false,
        error: ''
    },
    reducers: {
        setResponseResult: (state, action) => {
            console.log("what is the action payload: ", action.payload)
            if (action.payload.error || !action.payload) {
                state.isSuccess = false;
                state.error = action.payload.error;
            }
            else {
                state.isSuccess = true;
            }
        }
    }
});

export const { setResponseResult } = createStorySlice.actions;

export const submitStory = data => async dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('authToken')}`
    };
    console.log("data to submit for story creation: ", data);
    const response = await fetch('http://localhost:3000/api/v1/stories', {
        method: 'post',
        body: JSON.stringify(data),
        headers
    });
    let result;
    try {
        result = await response.json();
    }
    catch {
        result = false;
    }
   
    console.log("result saving story: ", result)
    dispatch(setResponseResult(result));

};

export const selectResponseResult = state => state.createStory.isSuccess;
export const selectError = state => state.createStory.error;

export default createStorySlice.reducer;