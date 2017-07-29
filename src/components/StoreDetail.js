import React, {Component} from 'react';
import Address from './Address';
import OpeningHours from './OpeningHours';
import Facilities from './Facilities';
import _ from 'lodash';

class StoreDetail extends Component {   
    renderNoStore() {
        return (
            <div className="store-detail"></div>
        )
    }

    renderStore() {
        return (
            <div className="store-detail store-detail--active">               
                <OpeningHours hours={this.props.store.openingHours[0]} />



                <Facilities facilities={this.props.store.facilities} />
            </div>
        );
    }

    render() { 
        if (this.props.store && this.props.show) {
            return this.renderStore();
        } else {
            return this.renderNoStore();
        }       
    }
}

export default StoreDetail;