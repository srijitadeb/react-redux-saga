import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import toDoApp from './reducers';
import './index.css';
import App from './App';
import { loadToDoList } from './actions';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));
console.log({store})

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
