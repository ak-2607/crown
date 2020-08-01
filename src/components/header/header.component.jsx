import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ? 
                    <Link className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </Link>
                    :
                    <Link className='option' to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);