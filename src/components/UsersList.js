import React, { useState } from 'react';
import Data from '../users.json'
import User from './User';

const UsersList = () => {
    const [ data, setData ] = useState(Data);
    const [ toggle, setToggle ] = useState(false);
    const picto = <img src="../picto_triangle_active.png" alt="Icon triangle orienté vers le bas" />;

    // json dans dossier public
    // const getData = () => {
    //     fetch('./users.json')
    //         .then(res => res.json())
    //         .then(datas => console.log(datas))
    // }

    const filter = () => {
        setToggle(!toggle);
        setData(Data.sort((a, b) => a.birthdate - b.birthdate));
    }

    return(
            <div className="container">
                <div className="jumbotron jumbotron-fluid text-left">
                    <div className="container">
                    <h1 className="display-4">Liste d'utilisateurs</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac eros id nibh vestibulum sollicitudin.</p>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Nom { picto }</th>
                        <th>Email { picto }</th>
                        <th onClick={ () => filter() } >Age { picto }</th>
                        <th>Ville { picto }</th>
                        <th></th>
                    </tr>
                    { Data.map((user) => { 
                        const { id, lastname, firstname, email, birthdate, city, info } = user;
                        return <User 
                            key={ id }
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