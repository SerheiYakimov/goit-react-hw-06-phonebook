import { combineReducers } from "redux";
import { contactsReducer, filterReducer } from "./phonebook/phonebook-reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


const rootReducer = combineReducers({
    contacts: persistedContactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

export const persistor = persistStore(store);