import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {cartToggleAction} from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCart}) => {
    return(
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(cartToggleAction())
});

export default connect(null, mapDispatchToProps)(CartIcon);