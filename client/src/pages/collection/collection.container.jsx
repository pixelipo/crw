import React from 'react';
import {useQuery, gql} from '@apollo/client';

import CollectionPage from './collection';
import Spinner from '../../components/spinner/spinner';


const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
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

const CollectionPageContainer = ({match}) => {
    const {loading, data} = useQuery(GET_COLLECTION_BY_TITLE, {
        variables: {title: match.params.collectionId}
    });

    if (loading) return <Spinner />;
    return <CollectionPage collection={data.getCollectionsByTitle} />;
};

export default CollectionPageContainer;
