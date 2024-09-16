import { configureStore } from "@reduxjs/toolkit";
import Lang from "../Reducers/Lang";

const store = configureStore({
  reducer: Lang,
});

export default store;
