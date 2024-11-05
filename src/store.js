import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./redux/reducers";

const store = configureStore({
  reducer: {
    urlData: urlReducer,
  },
});

export default store;
