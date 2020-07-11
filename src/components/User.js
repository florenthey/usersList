import React from 'react';
import { NavLink } from 'react-router-dom';


const User = ({ id, lastname, firstname, email, birthdate, city, info }) => {

    return(
        <tr>
            <td>{ `${lastname}, ${firstname}` }</td>
            <td>{ email }</td>
            <td>{ birthdate }</td>
            <td>{ city }</td>
            <td>
                <NavLink to={`/profil/${ id }`} className="nav-link">
                    <img src="./picto_plus.png" alt="icon en forme de croix plus" />
                </NavLink>
            </td>
        </tr>
    )
};

export default User;