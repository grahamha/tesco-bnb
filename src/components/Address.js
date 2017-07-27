import React from 'react';

export default (props) => {
    return (
        <div>
            {props.address.address.lines.map((line, i) => {
                return <p  className="address__line" key={i}>{line.text}</p>
            })}
            <p className="address__line">{props.address.address.town}</p>
            <p className="address__line">{props.address.address.postcode}</p>
        </div>
    );
}