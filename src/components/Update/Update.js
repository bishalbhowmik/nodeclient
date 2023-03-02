import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedInfo = useLoaderData();
    const [users, setUsers] = useState(storedInfo);

    const handleUserInfo = event => {
        event.preventDefault();
        

        fetch(`http://localhost:5000/users/${users._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })

        

    }



    const updateInput = (event) => {

        const field = event.target.name;
        const value = event.target.value;
        const newUsers = { ...users };
        newUsers[field] = value;
        setUsers(newUsers);


    }


    return (
        <div>
            <h2>Updated:{storedInfo.name} </h2>
            <form action="" onSubmit={handleUserInfo}>
                <input onChange={updateInput} type="text" defaultValue={storedInfo.name} name="name" id="" placeholder='Name' />
                <br />
                <input onChange={updateInput} type="email" defaultValue={storedInfo.email} name="email" id="" placeholder='Email' />
                <br />
                <input onChange={updateInput} type="text" defaultValue={storedInfo.address} name="address" id="" placeholder='address' />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;