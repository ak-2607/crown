import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-or-sign-up.styles.scss';

const SignInOrSignUp = () => {
    return (
        <div className='sign-in-or-sign-up'>
            <SignIn/> 
            <SignUp/>
        </div>
    )
}

export default SignInOrSignUp;