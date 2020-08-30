import React from 'react';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import {HeaderContainer, LogoContainer, OptionsContainer, 
    OptionLink, OptionDiv} from './header.styles';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser, toggleCart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {
                    currentUser ? 
                    (<OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>)
                    :
                    (<OptionLink to="/signin">SIGN IN</OptionLink>)
                }
                <CartIcon/>
            </OptionsContainer>
            {
                toggleCart ?
                null
                :
                <CartDropdown />
            }           
        </HeaderContainer>
    )
}

const mapStateToProps = (state) => (
    {
        currentUser: selectCurrentUser(state),
        toggleCart: selectCartHidden(state)
    }
)

export default connect(mapStateToProps)(Header);