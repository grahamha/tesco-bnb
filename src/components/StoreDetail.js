import React, {Component} from 'react';
import Address from './Address';
import OpeningHours from './OpeningHours';
import Facilities from './Facilities';

class StoreDetail extends Component {   
    renderNoStore() {
        return (
            <div>
            </div>
        )
    }

    renderStore() {
        return (
            <div className="container">
                <h2>{this.props.store.name}</h2>
                <p>{this.props.store.classification.type}</p>
                <Address address={this.props.store.contact} />
                <OpeningHours hours={this.props.store.openingHours[0]} />
                <Facilities facilities={this.props.store.facilities} />
            </div>
        );
    }

    render() { 
        if (this.props.store) {
            return this.renderStore();
        } else {
            return this.renderNoStore();
        }       
    }
}

export default StoreDetail;