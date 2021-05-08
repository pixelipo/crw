import React from 'react';
import {gql, useQuery} from '@apollo/client';

import Spinner from '../spinner/spinner';
import MenuItem from '../menu-item/menu-item';

import './directory.scss'

const GET_CATEGORIES = gql`
{
    collections {
        id
        title
    }
}
`;

const DirectoryMenu = () => {
    const {loading, error, data} = useQuery(GET_CATEGORIES);

    // TODO: this should server-side
    const sectionImages = {
            hats: 'https://i.ibb.co/cvpntL1/hats.png',
            jackets: 'https://i.ibb.co/px2tCc3/jackets.png',
            sneakers: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            womens: 'https://i.ibb.co/GCCdy8t/womens.png',
            mens: 'https://i.ibb.co/R70vBrQ/men.png'
    };

    if (loading) return <Spinner />;
    if (error) return <div>{error.message}</div>;

    return (
        <div className='directory-menu'>
            {data.collections.map(({id, title, ...otherSectionProps}) => (
                <MenuItem key={id} imageUrl={sectionImages[title.toLowerCase()]} title={title} {...otherSectionProps} />
            ))}
        </div>
    );
};

export default DirectoryMenu;
