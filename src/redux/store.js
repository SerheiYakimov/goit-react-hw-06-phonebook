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

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);




export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

export const persistor = persistStore(store);