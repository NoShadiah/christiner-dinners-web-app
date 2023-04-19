import {useState} from "react";
import "./login.css";
// Step number 1
export function LoginForm(){
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
                localStorage.setItem('user_type', JSON.stringify(data.user_type));
            }
            

    })
        .catch(error =>(
            console.error("There is a problem with the data", error)
        ))
    }
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        UserLogin()
        setEmail("");
        setPassword("");
        // console.log("Your password is",password+"!?23%4"+email+"!&")
    }
    return(
        <div id='form1'>
        <p>NAVZs online</p>
        <form onSubmit={handleSubmit}>
          <h1>Please Login to go further.</h1>
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


// export function LoginForm(props) {

//     function closeForm() {
//       document.getElementById("myForm").style.display = "none";
//     }
  
//     return (

//       <div className='section'>
//         <div className='container grid-container contact-content'>
//             <div>
                
//                 <img src="https://tinyurl.com/5a34ph7y" alt="get in touch" />

//                 <p>Guess what!!!!!!!</p>
//                 <span>Login to discover more</span>
//                 </div>

//             <div>
//                 <h1 className='heading-secondary'>
//                     Just <span>Login</span>
//                 </h1>

//                 <form>
//                     <div className='form-field name-email'>
//                         <div>
//                             <label>Email</label>
//                             <input type="email" name='email' />
//                         </div><br></br>

//                         <div>
//                             <label>Password</label>
//                             <input type="password" name='pasword' />
//                         </div>
//                     </div>
//                 </form>

//                 <button onClick={closeForm}>Login</button>
//             </div>
//         </div>
//     </div>

//       // <>
//       //   <h1>Login</h1>
  
//       //   {props.hasSubmitted ? <p>{props.data}</p> : <p>Please provide the correct details</p>}
  
//       //   <label htmlFor="email">
//       //     <b>Email</b>
//       //   </label>
//       //   <input
//       //     type="text"
//       //     placeholder="Enter Email"
//       //     name="email"
//       //     required
//       //     onChange={(e) => props.setEmail(e.target.value)}
//       //     value={props.email}
//       //   ></input>
  
//       //   <label htmlFor="psw">
//       //     <b>Password</b>
//       //   </label>
//       //   <input
//       //     type="password"
//       //     placeholder="Enter Password"
//       //     name="psw"
//       //     required
//       //     onChange={(e) => props.setPassword(e.target.value)}
//       //     value={props.password}
//       //   ></input>
  
//       //   <button type="submit" className="btn">
//       //     Login
//       //   </button>
  
//       //   <button type="button" className="btn-cancel" onClick={closeForm}>
//       //     Close
//       //   </button>
//       // </>
//     );
//   }
  