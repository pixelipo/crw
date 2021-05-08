import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInPage from './pages/signin/signin';
import CheckoutPage from './pages/checkout/checkout';

import {default as Header} from './components/header/header';

import CurrentUserContext from './contexts/current-user/current-user';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

const App = () => {
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
        <div>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/signin' render={() =>
                    currentUser ? <Redirect to='/' /> : <SignInPage />
                } />
            </Switch>
        </div>
    );
}

export default App;
