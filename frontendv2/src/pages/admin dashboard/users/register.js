import {useEffect, useState} from "react";
// import APIService from "./posting";
// Number 1
export function UserRegister(props){
    const [firstname, setFirstName]=useState("");
    const [lastname, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [contact, setContact]=useState("");
    const [usertype, setUserType]=useState("Client");
    const [address, setAddress]=useState("");
    const [gender, setGender]=useState("F");
    const [password, setPassword]=useState("");
    const[success, setSuccess] = useState("");
    const ChangeFirstName=(e)=>{
             setFirstName(e.target.value)
            
             console.log(firstname)

    }
    const ChangeLastName=(e)=>{
        setLastName(e.target.value)
       
        console.log(lastname)

}
    const ChangeEmail=(e)=>{
        
       setEmail(e.target.value)
        console.log(email)
    }
    const ChangeContact=(e)=>{
        
        setContact(e.target.value)
        console.log(contact)
    }
    const ChangeAddress=(e)=>{
        
        setAddress(e.target.value)
        console.log(address)
    }
    const ChangeGender=(e)=>{
        
        setGender(e.target.value)
        console.log(gender)
    }
    const ChangePassword=(e)=>{
        
        setPassword(e.target.value)
        console.log(password)
    }
    // const insertUser = () =>{
    //     APIService.InsertUser({firstname, lastname, email, contact, password, address, gender, usertype})
    //     .then((response) => response)
    //     .catch(error => console.log('error',error))
    //   }
      // update the existing user list
//   const inserteduser = (user) =>{
//     const new_users = [...users,user]
//     setUsers(new_users)
//   }
    function InsertUser(){
       const data = {
        firstname,
        lastname,
        email,
        contact,
        address,
        password,
        user_type:usertype,
        gender
    }
    

        fetch("http://localhost:5000/api/v2/users/register", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
        
  
      const handleSubmit=(event)=>{ 
        event.preventDefault()
        InsertUser()
        setFirstName('')
        setLastName('')
        setEmail('')
        setContact('')
        setAddress('')
        setPassword('')
        setGender('')
      }
    
    return(
        <div id='form1'>
            <h1>Enter User Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name: </label>
                    <input 
                    type='text'
                    value={firstname}
                    onChange={ChangeFirstName}
                    required
                    />
                </div>
                <div>
                    <label>Last name: </label>
                    <input 
                    type='text'
                    value={lastname}
                    onChange={ChangeLastName}
                    required
                    />
                </div>
                <div>
                    <label>Enter email: </label>
                    <input 
                    type='text'
                    value={email}
                    onChange={ChangeEmail}
                    required/>
                    
                </div>
                <div>
                    <label>Enter your contact: </label>
                    <input 
                    type='text'
                    value={contact}
                    onChange={ChangeContact}
                    required/>
                </div>
                <div>
                    <label>Address: </label>
                    <input 
                    type='text'
                    value={address}
                    onChange={ChangeAddress}
                    required/>
                </div>
                <div>
                    <label>Gender: </label>
                    <input 
                    type='text'
                    value={gender}
                    onChange={ChangeGender}
                    required/>
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                    type='password'
                    value={password}
                    onChange={ChangePassword}
                    required/>
                </div>
                <div>
                    <button >Submit</button>
                    <p>Submit form the form and hit the save button to Save the user</p>
                </div>
            </form>

    </div>
    )
}