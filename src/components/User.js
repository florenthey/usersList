import React from 'react';
import Profil from './Profil'

const User = ({ id, lastname, firstname, email, birthdate, city, info }) => {
    
    const displayProfil = () => {
       
    }

    return(
        <tr>
            <td>{ `${lastname}, ${firstname}` }</td>
            <td>{ email }</td>
            <td>{ birthdate }</td>
            <td>{ city }</td>
            <td>
                <a onClick={ displayProfil }>
                    <img src="./picto_plus.png" alt="icon en forme de croix plus" />
                </a>
            </td>
        </tr>
    )
};

export default User;