import { configureStore } from '@reduxjs/toolkit'
//import { useReducer } from 'react'
import userReducer from '../redux/user/userSlice.js';

export const store = configureStore({
  reducer: {user : userReducer},

  middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck : false ,
    }), 
})