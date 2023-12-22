import React from 'react';
import {Link } from "react-router-dom";
function ElementClient(props,{image, id, nom, Prenom, email,num }) {
    return (
        <tr>
            <td>
        {image ? (
          <img
            src={image}
            alt={`Image for ${nom} ${Prenom}`}
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        ) : (
          <div>No Image Available</div>
        )}
      </td>
            <td>{id}</td>
            <td>{nom}</td>
            <td>{Prenom}</td>
            <td>{email}</td>
            <td>{num}</td>
        
        </tr>
    );
}

export default ElementClient