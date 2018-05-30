//TO_DO add more actions test

import * as actions from '../actions/index'

describe('actions', () => {
    it('should create an action to add to cart', () => {
        const product = {
            "title": "Hand Painted Blue Flat Dish",
            "brand": "Kiriko",
            "price": 28,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
            "image": "hand-painted-blue-flat-dish.jpg"
        };
        const expectedAction = {
            type: 'ADD_TO_CART',
            id: 'Hand Painted Blue Flat Dish',
            "title": "Hand Painted Blue Flat Dish",
            "brand": "Kiriko",
            "price": 28,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
            "image": "hand-painted-blue-flat-dish.jpg"
        }
        expect(actions.addToCart(product)).toEqual(expectedAction)
    })
})