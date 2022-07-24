import { combineReducers } from "@reduxjs/toolkit";
import searchTrend from "./naver/searchTrend";

export default combineReducers({
  naver: combineReducers({
    searchTrend: searchTrend.reducer,
  }),
});
