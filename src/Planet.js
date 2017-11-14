import React, {Component} from 'react';
import {} from 'react-bootstrap';

export const Planet = ({name, dens, telescope, img, year}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Density {dens}</p>
            <p>Discovered in {year} with {telescope}</p>
        </div>
    );
}