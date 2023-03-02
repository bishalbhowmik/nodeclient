import React, { useState } from 'react';

const Info = () => {

    const [users, setUsers] = useState();

    const handleUserInfo =event =>{
        event.preventDefault();
        console.log(users);
        
        

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers :{
                'content-type':'application/json'
            },
            body : JSON.stringify(users)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('User Added Successfully');
                event.target.reset();
            }
        })

    }

    

    const getInfo =(event) =>{
        
        const field = event.target.name;
        const value = event.target.value;
        const newUsers = {...users};
              newUsers[field] =value;
              setUsers(newUsers);
        
    }


    return (
        <div>
            <h2>This is info page</h2>

            <form action="" onSubmit={handleUserInfo}>
                <input onChange={getInfo} type="text" name="name" id="" placeholder='Name'/>
                <br/>
                <input onChange={getInfo} type="email" name="email" id="" placeholder='Email'/>
                <br/>
                <input onChange={getInfo} type="text" name="address" id="" placeholder='Address'/>
                <br/>
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
};

export default Info;