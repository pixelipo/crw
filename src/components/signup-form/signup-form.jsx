import React from 'react';

import FormInput from '../form-input/form-input'
import Button from '../button/button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signup-form.scss'


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSumbit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password != confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const{name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSumbit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <div className='buttons'>
                        <Button type='submit'>Sign up</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;
