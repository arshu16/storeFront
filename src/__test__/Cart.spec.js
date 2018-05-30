
import { MemoryRouter } from 'react-router-dom';
import React from 'react'
import {
    shallow,
    mount
} from 'enzyme';
import renderer from 'react-test-renderer'
import ConnectedCart, {Cart} from '../cart/Cart'
import configureStore from 'redux-mock-store'
import {
    Provider
} from 'react-redux';
import {addToCart} from '../actions/index';

describe('Cart --- Renders without crashing',()=>{
    const initialState = {
        cart: {
            "Hand Painted Blue Flat Dish": {
                type: 'ADD_TO_CART',
                id: "Hand Painted Blue Flat Dish",
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                quantity: 1,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "hand-painted-blue-flat-dish.jpg"
            }
        }
    }
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}>
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <ConnectedCart />
            </MemoryRouter>
        </Provider> )
    })

    it('+++ contains header - h1', () => {
        expect(wrapper.contains(<h1>Shopping Cart</h1>)).toBe(true)
    });

    it('+++ render the connected component', () => {
       expect(wrapper.find(ConnectedCart).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
       expect(wrapper.find(Cart).prop('cart')).toEqual(initialState.cart)
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(addToCart({
            "title": "Hand Painted Blue Flat Dish",
            "brand": "Kiriko",
            "price": 28,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
            "image": "hand-painted-blue-flat-dish.jpg"
        }))
        action = store.getActions()
        expect(action[0].type).toBe("ADD_TO_CART")
    });

});