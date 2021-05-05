import React from 'react';
import {gql, useQuery} from '@apollo/client';

import Spinner from '../spinner/spinner';
import CollectionPreview from '../collection-preview/collection-preview';

import './collections-overview.scss'

const GET_COLLECTIONS = gql`
{
    collections {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}
`;

const CollectionsOverview = () => {
    const {loading, error, data} = useQuery(GET_COLLECTIONS);

    if (loading) return <Spinner />;
    if (error) return <div>{error.message}</div>;
    return (
        <div className='collections-overview'>
            {data.collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))};
        </div>
    );
};

export default CollectionsOverview;
