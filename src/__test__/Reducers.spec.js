import cart from '../reducers/cart';

describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(cart(undefined, {})).toEqual({})
    })

    it('should handle ADD_TO_CART', () => {
        expect(
            cart([], {
                type: 'ADD_TO_CART',
                id: "Hand Painted Blue Flat Dish",
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "hand-painted-blue-flat-dish.jpg"
            })
        ).toEqual({
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
        })
    })
})