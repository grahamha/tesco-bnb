import React, {Component} from 'react';
import Store from './Store';

class StoreList extends Component {
    renderEmpty() {
        return (
            <div className="stores">
            </div>
        )
    }

    renderList() {
        return (
            <div className="stores">     
                <div className="stores-content">           
                    {this.props.stores.map((store) => {
                        return <Store key={store.location.id} store={store.location} storeSelected={this.props.storeSelected} activeStore={this.props.activeStore} />
                    })}                
                </div>
            </div>
        );
    }

    render() {
        if (this.props.stores.length > 0) {
            return this.renderList();
        } else {
            return this.renderEmpty();
        }
    }
}

export default StoreList;