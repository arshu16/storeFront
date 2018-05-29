import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore(); //Get store, either with persisted state or with new state

console.log('THIS IS THE store', store.getState());

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
