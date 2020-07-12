import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({ id, lastname, firstname, email, birthdate, city }) => {

    return(
        <tr>
            <td>{ `${lastname}, ${firstname}` }</td>
            <td>{ email }</td>
            <td>{ birthdate }</td>
            <td>{ city }</td>
            <td>
                <a href={`/profil/${ id }`} className="nav-link">
                    <img src="./picto_plus.png" alt="icon en forme de croix plus" />
                </a>
            </td>
        </tr>
    )
};

export default User;