import React, {Component} from 'react';

class Facilities extends Component {
    render() {
        return (            
            <div>
                <p className="facilities__heading">Facilities</p>
                <ul className="facilities__list">
                    {this.props.facilities.map((f, i) => <li key={i}>{f.description}</li>)}
                </ul>
            </div>
        );
    }
}

export default Facilities;