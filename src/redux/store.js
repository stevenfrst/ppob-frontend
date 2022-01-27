import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import loginSlice from "./loginSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import registerSlice from "./registerSlice";
import errorSlice from "./errorSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import userLogSlice from "./userLogSlice";
import transactionSlice from "./transactionSlice";
import { encryptTransform } from 'redux-persist-transform-encrypt';

const rootReducer = combineReducers({login:loginSlice, register:registerSlice, product:productSlice, user:userSlice, userLog:userLogSlice, transaction:transactionSlice, error:errorSlice})
const persistedReducer = persistReducer({
  key:'root',
  storage,
  blacklist:['error', 'product', 'transaction'],
  transforms:[
    encryptTransform({
      secretKey:'root',
      onError: function (error) {
        // Handle the error.
      }
    })
  ]
}, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

const persistor = persistStore(store)
export {persistor} 