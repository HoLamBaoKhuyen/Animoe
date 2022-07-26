import { combineReducers } from "redux";
import animeReducer from "./slices/animeSlice";
import { apiSlice } from "./slices/apiSlice";

export const rootReducer = combineReducers({
  anime: animeReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
