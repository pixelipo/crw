import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item';

import {selectDirectorySelections} from '../../redux/directory/directory.selectors';

import './directory.scss'


const DirectoryMenu = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelections
});

export default connect(mapStateToProps)(DirectoryMenu);
