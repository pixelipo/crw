import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './signin-form.scss';


class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSumbit = async event => {
        event.preventDefault();

        const{email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your eamil and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <Button type='submit'>Sign in</Button>
                        <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
