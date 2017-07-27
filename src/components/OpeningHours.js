import React, {Component} from 'react';
import OpeningHoursLine from './OpeningHoursLine';

class OpeningHours extends Component { 
    render() {  
        var openHours = this.props.hours.standardOpeningHours;
        
        return (
            <div className="opening-hours">
                <OpeningHoursLine day="Monday" data={openHours.mo} />
                <OpeningHoursLine day="Tuesday" data={openHours.tu} />
                <OpeningHoursLine day="Wednesday" data={openHours.we} />
                <OpeningHoursLine day="Thursday" data={openHours.th} />
                <OpeningHoursLine day="Friday" data={openHours.fr} />
                <OpeningHoursLine day="Saturday" data={openHours.sa} />
                <OpeningHoursLine day="Sunday" data={openHours.su} />
            </div>
        );
    }
}

export default OpeningHours;