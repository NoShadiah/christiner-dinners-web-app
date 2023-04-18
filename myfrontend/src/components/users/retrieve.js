import {useState, useEffect} from "react";

export function Users() {
    

    // Fecth users
    const[users, setUsers] = useState([])
    useEffect(()=>{
        
        
        // const fetchUsers =() =>{
        //     const token = localStorage.getItem('access_token');
        //     fetch('http://localhost:5000/api/v2/users/all',{
        //         headers : { 
        //           'Content-Type': 'application/json',
        //         //   'Accept': 'application/json',
        //           'Authorization': `Bearer ${token}`
        //          }
        //   })
        //   .then((response) =>response.json() )
        //   .then((data)=>{setUsers(data); localStorage.setItem('myUsers', JSON.stringify(data))})
        //   .catch(error=>console.error(error))
            
           
        // }
        // fetchUsers();
        const fetchUsers = () => {
            const token = localStorage.getItem('access_token');
            
            fetch('http://localhost:5000/api/v2/users/all', {
              headers: { 
                'Content-Type': 'application/json'
                ,'Authorization': `Bearer Token ${token}`
              }
            })
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .then(data => {
              setUsers(data);
              localStorage.setItem('myUsers', JSON.stringify(data));
            })
            .catch(error => console.error(error));
          }
          
          fetchUsers();
    }, [])
    console.log("users state:",users)
    // console.log("storageUsers", JSON.parse(localStorage.getItem("myUsers")))
    return (
            <div className='section'>
                <h3>A list of my users</h3>
                <div className='list'>
                   <table>
                         <tr className="head">
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Registered at</th>
                            <th>Updated at</th>
                        </tr>
                        {
            users?.map(user =>(
                                <tr className="head">
                                    <td>{user["Id"]}</td>
                                    <td>{user["First name"]}</td>
                                    <td>{user["Last name"]}</td>
                                    <td>{user["Email"]}</td>
                                    <td>{user["User type"]}</td>
                                    <td>{user["Contact"]}</td>
                                    <td>{user["Address"]}</td>
                                    <td>{user["Gender"]}</td>
                                    <td>{user["Registered at"]}</td>
                                    <td>{user["Updated at"]}</td>
                                </tr>))
                        }
                                
                                </table>
                    </div>
                </div>
        )
}