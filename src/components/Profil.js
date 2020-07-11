import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../users.json'

const Profil = (props) => {

    const { id } = props.match.params;

    return(
        <div className="container text-left">
            <NavLink to="/" className="btn btn-primary">
                Retour
            </NavLink>

            <div class="card">
            <div class="card-horizontal">
            <img class="rounded-circle img_info" src={`../../user_${Data[id].id}.jpg`} alt="Card image cap" />
                <div class="card-body text-left">
                    <h1 class="card-title">{`${Data[id].lastname} ${Data[id].firstname}`}</h1>
                    <p><b>Email: </b>{Data[id].email}</p>
                    <p><b>Age: </b>{Data[id].birthdate}</p>
                    <p><b>Ville: </b>{Data[id].city}</p>
                    <p>{Data[id].info}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profil;