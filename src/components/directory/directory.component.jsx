import React from 'react';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({sections}) => {
        return(
            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherProps}) => {
                        return (
                            <MenuItem
                                key = {id}
                                {...otherProps}
                            ></MenuItem>
                        )
                    })
                }
            </div>
        )
}

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);