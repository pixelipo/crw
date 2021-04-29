import {React, useState} from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './signin-form.scss';


const SignInForm = () => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSumbit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setCredentials({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSumbit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle} styler='google-sign-in'>Sign in with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
