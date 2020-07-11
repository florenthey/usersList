import React, { useState, useEffect } from 'react';
import Data from '../users.json'
import User from './User';

const UsersList = () => {
    const [ data, setData ] = useState(Data);
    const [ toggle, setToggle ] = useState(false)
    const pictoTriangle = <img src="../picto_triangle_active.png" />;
        
    // filter ne change pas les valeurs du state, la vue ne ce render pas
    // donc utilisation du boolean toggle
    const filter = () => {
        setToggle(!toggle);
        setData(Data.sort((a, b) => a.birthdate - b.birthdate));
        console.log("data", data)
    }

    return(
            <div className="container">
                <div class="jumbotron jumbotron-fluid text-left">
                    <div class="container">
                    <h1 class="display-4">Liste d'utilisateurs</h1>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac eros id nibh vestibulum sollicitudin.</p>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Nom { pictoTriangle }</th>
                        <th>Email { pictoTriangle }</th>
                        <th onClick={ () => filter() } >Age { pictoTriangle }</th>
                        <th>Ville { pictoTriangle }</th>
                        <th></th>
                    </tr>
                    { Data.map((user,) => { 
                        const { id, lastname, firstname, email, birthdate, city, info } = user
                        return user = <User 
                            id={ id }
                            lastname={ lastname }
                            firstname={ firstname }
                            email={ email }
                            birthdate={ birthdate }
                            city={ city }
                            info={ info }
                        />
                    })}
                    <User />
                    </tbody>
                </table>
            </div>
    )
};

export default UsersList;