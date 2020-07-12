import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../users.json'

const Profil = (props) => {
    const { id } = props.match.params;

    return(
        <div className="container text-left">
            <NavLink to="/" className="btn btn-primary">
                Retour
            </NavLink>

            <div className="card">
            <div className="card-horizontal">
            <img className="rounded-circle" src={`../../user_${Data[id].id}.jpg`} alt={`Photo de profil de l'utilisateur ${Data[id].firstname}`} />
                <div className="card-body text-left">
                    <h1 className="card-title">{`${Data[id].lastname} ${Data[id].firstname}`}</h1>
                    <p><b>Email: </b>{Data[id].email}</p>
                    <p><b>Age: </b>{new Date().getFullYear() - Data[id].birthdate + " ans"}</p>
                    <p><b>Ville: </b>{Data[id].city}</p>
                    <p>{Data[id].info}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Profil;