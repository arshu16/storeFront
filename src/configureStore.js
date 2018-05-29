import {
    createStore
} from 'redux';
import cartApp from './reducers';
import {
    loadState,
    saveState
} from './localStorage.js';
import throttle from 'lodash.throttle';

const configureStore = () => {
    const persistedState = loadState(); //Try to get the state from the localstorage
    const store = createStore(cartApp, persistedState); //Make a new store with empty or persisted data

    store.subscribe(throttle(() => { //This middleware helps preserve our state into the localstorage
                                    // We need to throttle it so that it does not hinder performance
        console.log('THIS IS THE store', store.getState());
        saveState({
            cart: store.getState().cart, //Store the cart value
        });
    }, 1000));

    return store;
};

export default configureStore;