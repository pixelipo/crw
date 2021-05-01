import  React from 'react';

import SignInForm from '../../components/signin-form/signin-form';
import SignUpForm from '../../components/signup-form/signup-form';

import './signin.scss';


const SignInPage = () => (
    <div className='sign-in-wrapper'>
        <SignInForm />
        <SignUpForm />
    </div>
)

export default SignInPage;
