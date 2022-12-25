import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


export const rootReducer = combineReducers({
    counter: counterReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
