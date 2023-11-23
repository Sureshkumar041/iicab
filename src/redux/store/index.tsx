import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import UserReducer from "../reducer/userReducer";

const reducerList = combineReducers({
    UserReducer,
});
const configureRedux = () => {
    return configureStore({reducer:reducerList});
  };
  
  export default configureRedux;

  export type RootStore = ReturnType<typeof reducerList>