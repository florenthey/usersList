import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../users.json'

const Profil = () => {

    const { id } = this.props.match.params;
    //const [lastname, firstname, email, city,info] = Data[id];

    return(
        <div>
            <p>{`€{Data[id].lastname} ${Data[id].firstname}`}</p>
            <p>Email:{Data[id].email}</p>
            <p>Age:{Data[id].birthdate}</p>
            <p>Ville:{Data[id].city}</p>
            <p>{Data[id].info}</p>
        </div>
    )
}

export default Profil;