import {useState, useEffect} from "react";

export function Users() {
    const[users, setUsers] = useState([])
    console.log("users state:",users)

    // Fecth users
    
    useEffect(()=>{
        const fetchusers =() =>{
            fetch('http://localhost:5000/api/v2/users/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          
              })
            .then((response) => 
            // console.log("API response",
            response.json() )
            .then((data)=>setUsers(data.users))
            console.log("users state:",users)
        }
        fetchusers();
    }, [])
    console.log("users state:",users)
    return (
            <div className='users-section'>
                <h3>A list of my users</h3>
                <div className='users-list'>
                    {
            users?.map(user =>(<>
                                <span>{user.first_name}</span><br></br>
                                <span>{user.last_name}</span><br></br>
                                <span>{user.email}</span><br></br>
                                <span>{user.user_type}</span><br></br>
                                <span>{user.contact}</span><br></br>
                            </>))}</div>
                            </div>)}