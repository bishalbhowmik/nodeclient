import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const userInfo = useLoaderData();

    const [displayUser, setDisplayUser] = useState(userInfo);
    const handleDelete =(user) =>{

        const agree =window.confirm(`Are you sure to delete ${user.name}`);

        if(agree){
                    fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('User Deleted successfully');
               const remaining = displayUser.filter(usr => usr._id !== user._id);
                setDisplayUser(remaining);
            }
        })
        }



    }
    return (
        <div>
            <h2>This HOme page {displayUser.length}</h2>

            {
                displayUser.map(user=>
                    <p key={user._id}>
                        {user.name}   {user.email} 
                    <button onClick={()=>handleDelete(user)}>X</button>
                    <Link to={`/update/${user._id}`}>Update</Link>
                    </p>
                )
            }
        </div>
    );
};

export default Home;