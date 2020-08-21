import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherProps}) => {
                return (
                    <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                )
            })
        }
    </div>
);

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);