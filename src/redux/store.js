import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"

import rootReducer from "./reducers"

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== "production"
})

export default store
