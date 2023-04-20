<<<<<<< HEAD
import { useState } from "react";
import './signup.css';
=======
import {useEffect, useState} from "react";
import "./signup.css";
>>>>>>> 81da47c57594eb2b7f02e0e199612070a76db040

export function SignUpForm(props){
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
    
<<<<<<< HEAD
    <div className='section'>
        <div className='containerform'>
            <div>
            <h1>Sign Up</h1>
                    {hasSubmitted ? <p>{data}</p> : <p></p>}
                    <form>
                        <div>
                        <label htmlFor="first-name">
                                <b>First name:</b>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your First Name"
                                name="first-name"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                        </div> <br></br><br></br>
                        <div>
                            <label htmlFor="last-name">
                                    <b>Last name:</b>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Last Name"
                                    name="last-name"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                ></input>
                        </div><br></br><br></br>
                            <div>
                                <label htmlFor="email">
                                    <b>Email:</b>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div><br></br><br></br>
                            <div>
                                <label htmlFor="contact">
                                    <b>Contact:</b>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Contact"
                                    name="contact"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                ></input>
                            </div> <br></br><br></br>
                            <div>
                                <label htmlFor="psw">
                                    <b>Password:</b>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="psw"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                            </div> <br></br><br></br>
                            
                            <div>
                                <button type="submit" className="btn" onClick={onSubmitClick}>
                                    Sign Up
                                </button>
                            </div><br></br><br></br>
                            <div>
                                <button type="button" className="btn-cancel" onClick={closeForm2}>
                                    Close
                                </button>
                            </div>
                            
                    </form>
                    
            </div>
            {/* <div>
                There must be an image here
            </div> */}
                    
      </div>
      </div>
=======

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
>>>>>>> 81da47c57594eb2b7f02e0e199612070a76db040
    
    return(
        <div id='form1'>
            <p>NAVZonline</p>
            <form onSubmit={handleSubmit}>
            
                <div>
                <h1>Trust and SignUp with NAVZs</h1>
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
                    <p>Submit form the form and hit the Signup button to access your account</p>
                </div>
            </form>

    </div>
    )
}