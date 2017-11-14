import React, {Component} from 'react';


export const Planet = ({name, dens}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Density {dens}</p>
           
        </div>
    );
}