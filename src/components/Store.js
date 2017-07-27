import React, {Component} from 'react';
import Address from './Address';

class Store extends Component {
    constructor(props) {
        super(props); 

        this.handleClick = this.handleClick.bind(this);
        this.getClassName = this.getClassName.bind(this); 
        this.onMouseOut = this.onMouseOut.bind(this); 
    }

    handleClick(e) {
        e.preventDefault();
        this.props.storeSelected(this.props.store);        
    }

    onMouseEnter(store) {
        this.props.storeSelected(this.props.store);        
    }

    onMouseOut() {
        this.props.storeSelected(null);
    }

    getClassName() {
        if (this.props.activeStore) {
            if (this.props.activeStore.id === this.props.store.id) {
                return 'stores-link stores-link--active';
            }
        }

        return 'stores-link';
    }

    render() { 
        return (           
            <a 
                href=""
                onClick={this.handleClick}
                onMouseEnter={this.onMouseEnter.bind(this, this.props.store)}
                onMouseLeave={this.onMouseOut}
                className={this.getClassName()}
            >
                <p className="stores-link__heading">
                    <span className="stores-link__name">{this.props.store.name}</span><br/>
                    <span className="stores-link__category">{this.props.store.classification.type}</span>
                </p>
                <Address address={this.props.store.contact} />
            </a>              
        );
    }
}

export default Store;