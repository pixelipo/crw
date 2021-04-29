import {React, useState} from 'react';

import FormInput from '../form-input/form-input'
import Button from '../button/button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup-form.scss'


const SignUpForm = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSumbit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            setCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = event => {
        const{name, value} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };

    return (
        <div className="sign-up">
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={   handleSumbit}>
                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <div className='buttons'>
                    <Button type='submit'>Sign up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
