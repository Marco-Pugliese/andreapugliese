import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Lang from "../Reducers/Lang";
import Page from "../Reducers/Page";

const combinedReducers = combineReducers({
  Lang,
  Page,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
