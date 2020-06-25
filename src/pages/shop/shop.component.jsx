import React from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: ShopData
        };
    }

    render(){
        return (
            <div>
                <h1>Collection</h1>
                {
                    this.state.collections.map(({id, ...otherProps}) => {
                        return (
                            <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;