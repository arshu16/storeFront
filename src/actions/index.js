const uuidv4 = require('uuid/v4')

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    id: product.title,
    ...product
});

export const increaseProductQuantity = (id) => ({
    type: 'INCREASE_PRODUCT_QUANTITY',
    id,
});

export const decreaseProductQuantity = (id) => ({
    type: 'DECREASE_PRODUCT_QUANTITY',
    id,
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    id,
});