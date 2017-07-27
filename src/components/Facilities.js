import React, {Component} from 'react';

class Facilities extends Component {
    render() {
        return (            
            <div>
                <p>Facilities</p>
                <ul>
                    {this.props.facilities.map((f, i) => <li key={i}>{f.description}</li>)}
                </ul>
            </div>
        );
    }
}

export default Facilities;