import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {cartToggleAction} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCart, cartQuantity}) => {
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartQuantity}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(cartToggleAction())
});

const mapStateToProps = (state) => (
    {
        cartQuantity: selectCartItemsCount(state)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);