import React, {useState} from "react";

const UserList = () => {
    const superCompleja = () => {
        console.log('Calculos super complejos');

        return [
            {
                firstName: 'Sebas',
                lastName: 'Morales'
            },
            {
                firstName: 'Gabriela',
                lastName: 'Tejada'
            },
            {
                firstName: 'Mateo',
                lastName: 'Lopez'
            }

        ];
    };

    const [users, setUsers] = useState(() => superCompleja());


    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName
    };

    const handleAddUser = () => {
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value

        const newUser = {
            firstName,
            lastName
        };

        setUsers((prevState) => {
            return[
                ...prevState,
                newUser
            ];
        });
    };

        return (
            <>
                <div>
                    <h1>Usuarios</h1>
                    <label htmlFor='firstName'>Nombre</label>
                    <input type='text' id='firstName'/>

                    <label htmlFor='lastName'>Apellido</label>
                    <input type='text' id='lastName'/>

                    <button onClick={handleAddUser}>Agregar</button>
                </div>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map((user, index)=>{
                            return<li key={`users-${index}`}>{formatName(user)}</li>
                            })
                    }
                </ul>
            </>
        );



}
export default UserList;