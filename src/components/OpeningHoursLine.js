import React, {Component} from 'react';

class OpeningHoursLine extends Component {
     formatHours(hours) {
        return hours.substr(0, 2) + ':' + hours.substr(2, 2);
    }


    getHours() {
        if (typeof this.props.data.open === 'undefined' && typeof this.props.data.close === 'undefined') {
            return '24 hours';
        } 
        
        if (typeof this.props.data.open !== 'undefined' && this.props.data.open === '0000') {
            return 'open from midnight';
        } 

        if (typeof this.props.data.close !== 'undefined' && this.props.data.close === '2400') {
            return 'open until midnight';
        }
                
        return this.formatHours(this.props.data.open) + '-' + this.formatHours(this.props.data.close);
    }

    render() {
        return (
            <tr className="opening-hours__hour-line">
                <td>{this.props.day}:</td>
                <td>{this.getHours()}</td>
            </tr>
        );
    }
}

export default OpeningHoursLine;