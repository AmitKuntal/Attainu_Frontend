import React from 'react';

export default function City(props) {
    console.log(props)
    return (
        <div className="city">
            <span className="city_name">{props.name}</span>
            <span>{props.state}</span>
        </div>
    )
}
