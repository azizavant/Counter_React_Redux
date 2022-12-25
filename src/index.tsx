import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import {AppReduxExamCounter} from "./AppReduxExamCounter";
import {PersistGate} from "redux-persist/integration/react";



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppReduxExamCounter/>
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
