import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner';
const CollectionsOverview = lazy(() => import('../../components/collections-overview/collections-overview'));
const CollectionPage = lazy(() => import('../collection/collection.container'));

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Suspense>
    </div>
);

export default ShopPage;
