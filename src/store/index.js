import { configureStore } from "@reduxjs/toolkit";
import inputData  from "../reducers/inputs";
/**
 * redux store
 */
export const store = configureStore({
  reducer: {
    inputdata: inputData,
  },
});
