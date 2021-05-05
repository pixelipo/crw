import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache
} from '@apollo/client';

import {store, persistor} from './redux/store';
import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';

const client = new ApolloClient({
    uri: 'https://crwn-clothing.com',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <CartProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
                </BrowserRouter>
            </Provider>
        </CartProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
