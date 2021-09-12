import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistReducer, persistStore } from 'redux-persist';
import allReducers from './reducer';
import storage from 'redux-persist/lib/storage';

const enhancer = composeWithDevTools();

const persistConfig = {
    key: 'taiwo_tic-tac',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const siteStore = createStore(persistedReducer, enhancer);
export default siteStore;
export const persistor = persistStore(siteStore);
