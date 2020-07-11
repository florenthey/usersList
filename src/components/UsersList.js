import React from 'react';
import Data from '../users.json'
import User from './User';

const UsersList = () => {

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
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Ville</th>
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