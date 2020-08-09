import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
export class ShopPage extends Component {
    state={
        collections: SHOP_DATA
    }
    render() {   
        const collections = this.state.collections;
        return (
            <div className="shop">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
                }
            </div>
        )
    }
}

export default ShopPage
