import {useState} from "react";
// Step number 1
export function Login(){
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    
    const Change=(e)=>{
             setPassword(e.target.value)
            
             console.log(password)

    }
    const ChangeEmail=(e)=>{
        
       setEmail(e.target.value)
        console.log(email)
    }
    
    function UserLogin(){
        // const [isloggedIn, setIsLoggedIn] = useState(false)
        const details = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }
        fetch('http://127.0.0.1:5000/api/v2/users/token', details)
        .then(response => response.json())
        .then((data)=>{
            console.log(data); 
            if (data.access_token){
                // setIsLoggedIn(true);
                localStorage.setItem('access_token', JSON.stringify(data.access_token));
                localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token));
            }
            

    })
        .catch(error =>(
            console.error("There is a problem with the data", error)
        ))
    }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        UserLogin()
        // console.log("Your password is",password+"!?23%4"+email+"!&")
    }
    return(
        <div id='form1'>
        <h1>Please Login to go further.</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter email: </label>
                <input 
                type='email'
                value={email}
                onChange={ChangeEmail}/>
            </div>
            <div>
                <label>Enter your password: </label>
                <input 
                type='password'
                value={password}
                onChange={Change}
                />
            </div>
            
            <div>
                <button >LogIn</button>
            </div>
        </form>

    </div>
    )
}