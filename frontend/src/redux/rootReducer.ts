import { combineReducers } from "redux";
import animeReducer from "./slices/animeSlice";
import mangaReducer from "./slices/mangaSlice";
import { apiSlice } from "./slices/apiSlice";

export const rootReducer = combineReducers({
  anime: animeReducer,
  manga: mangaReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
