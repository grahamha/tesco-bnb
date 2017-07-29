import React, {Component} from 'react';
import Address from './Address';
import StoreDetail from './StoreDetail';
import StoreDetailArrow from './StoreDetailArrow';

class Store extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            showDetail: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.getClassName = this.getClassName.bind(this); 
        this.onMouseOut = this.onMouseOut.bind(this); 
        this.showDetail = this.showDetail.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.storeSelected(this.props.store);        
        this.showDetail();
    }

    onMouseEnter(store) {
        this.props.storeSelected(this.props.store);        
    }

    onMouseOut() {
        this.props.storeSelected(null);
    }

    showDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        });
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
            <div className={this.getClassName()}>
                <a 
                    href=""
                    onClick={this.handleClick}
                    onMouseEnter={this.onMouseEnter.bind(this, this.props.store)}
                    onMouseLeave={this.onMouseOut}
                    className="stores-link__link"
                >
                    <p className="stores-link__heading">
                        <span className="stores-link__name">{this.props.store.name}</span><br/>
                        <span className="stores-link__category">{this.props.store.classification.type}</span>
                    </p>
                    <Address address={this.props.store.contact} />
                    <StoreDetailArrow showDetail={this.state.showDetail} />
                </a>       
                    
                <StoreDetail 
                    store={this.props.store} 
                    show={this.state.showDetail}
                />
            </div>
        );
    }
}

export default Store;