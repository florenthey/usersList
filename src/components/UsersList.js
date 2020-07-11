import React from 'react';
import Data from '../users.json'
import User from './User';

const UsersList = () => {

    return(
        <div>
            <table>
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