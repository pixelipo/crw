import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

import {default as Header} from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import CurrentUserContext from './contexts/current-user/current-user';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

const App = () => {
    const HomePage = lazy(() => import('./pages/homepage/homepage'));
    const ShopPage = lazy(() => import('./pages/shop/shop'));
    const SignInPage = lazy(() => import('./pages/signin/signin'));
    const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));
    const [currentUser, setCurrentUser] = useState(CurrentUserContext);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <BrowserRouter>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>
            <Switch>
                <ErrorBoundary imageUrl={'https://i.imgur.com/A040Lxr.png'}>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route exact path='/signin' render={() =>
                                currentUser ? <Redirect to='/' /> : <SignInPage />
                        } />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
