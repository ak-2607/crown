import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(err){
            console.log(err);
        }
        
    }

    changeHandler = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}> 
                    <FormInput 
                        name='email'
                        type='email' 
                        label='email'
                        value={this.state.email} 
                        onChange={this.changeHandler}
                        required
                    />
                    
                    <FormInput 
                        name='password'
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        onChange={this.changeHandler}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            SIGN IN
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;