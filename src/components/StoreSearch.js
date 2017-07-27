import React, {Component} from 'react';

class StoreSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.findStore(this.refs.location.value);
    }

    render() {
        return (
            <div className="search-container"> 
                <form onSubmit={this.handleSubmit}> 
                    <input type="text" ref="location" />
                    <button>Find</button>
                </form> 
            </div>
        );
    }
}

export default StoreSearch;