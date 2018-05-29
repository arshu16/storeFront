const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...action,
                quantity: action.quantity || 1
            };
        case 'INCREASE_PRODUCT_QUANTITY':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                quantity: state.quantity + 1,
            };
        case 'DECREASE_PRODUCT_QUANTITY':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                quantity: state.quantity - 1 || 0,
            };
        default:
            return state;
    }
};

const cart = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
        case 'INCREASE_PRODUCT_QUANTITY':
        case 'DECREASE_PRODUCT_QUANTITY':
            return {
                ...state,
                [action.id]: cartReducer(state[action.id], action),
            };
        case 'REMOVE_FROM_CART':
            return state.filter(p => {
                return p.id !== action.id;
            });
        default: 
            return state;
    }
};

export default cart;