// from the documentation #create redux store

import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';

export default configureStore({
  reducer: {
    name: "nav",
    nav: navReducer,
  }
})