// redux
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reduxThunk from "redux-thunk";
import storage from "redux-persist-indexeddb-storage";

// reducers

import { language_reducer } from "./reducer/language.rdc";

const reducer = combineReducers({ language_reducer });

const persistConfig = {
  key: "root",
  storage: storage("myDB"),
  whitelist: [language_reducer],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const persistor = persistStore(store);

export { store, persistor };
