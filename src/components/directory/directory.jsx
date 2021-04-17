import React from 'react';

import MenuItem from '../menu-item/menu-item'

import './directory.scss'


class DirectoryMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:  [
                {
                    title: 'hats',
                    subtitle: 'shop now',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    subtitle: 'shop now',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    subtitle: 'shop now',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'womens',
                    subtitle: 'shop now',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    subtitle: 'shop now',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, subtitle, imageUrl, size, id}) => (
                        <MenuItem
                            key={id}
                            title={title}
                            subtitle={subtitle}
                            imageUrl={imageUrl}
                            size={size}
                        />
                    ))
                }
            </div>
        )
    }
}

export default DirectoryMenu;
