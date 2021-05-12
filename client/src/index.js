import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { cache } from './graphql/cache';
import App from './App';

import './index.css';

const client = new ApolloClient({
    uri: 'https://crwn-clothing.com',
    cache
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
