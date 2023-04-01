import {useState} from "react";
// Number 1
export function MyForm(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [contact, setContact]=useState("");
    const Change=(e)=>{
             setName(e.target.value)
            
             console.log(name)

    }
    const ChangeEmail=(e)=>{
        
       setEmail(e.target.value)
        console.log(email)
    }
    const ChangeContact=(e)=>{
        
        setContact(e.target.value)
        console.log(contact)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Thank you, we have generated for you a password')
        console.log("Your password is",name+contact+"!?23%4"+email+"!&")
    }
    return(
        <div id='form1'>
        <h1>Please provide your data and check the console</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Enter your name: </label>
            <input 
            type='text'
            value={name}
            onChange={Change}
            />
            </div>
            <div>
            <label>Enter email: </label>
            <input 
            type='text'
            value={email}
            onChange={ChangeEmail}/>
            </div>
            <div>
            <label>Enter your contact: </label>
            <input 
            type='text'
            value={contact}
            onChange={ChangeContact}/>
            </div>
            <div>
                <button >Submit</button>
            </div>
        </form>

    </div>
    )
}