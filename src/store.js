import { configureStore } from "@reduxjs/toolkit";
import appApi from "./services/appApi";
import userSlice from "./features/userSlice";

//persist store (after refresing page)
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

//creating reducers for store
const reducer = combineReducers({
  user: userSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [appApi.reducerPath],
};

//persis our store
const persistedReducer = persistReducer(persistConfig, reducer);

//creating store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
