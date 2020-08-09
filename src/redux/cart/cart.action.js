import CartActionTypes from './cart.types';

export const cartToggleAction = () => (
    {
        type: CartActionTypes.TOGGLE_CART
    }
);

export const addItemToCart = item => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
);