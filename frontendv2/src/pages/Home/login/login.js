export function LoginForm(props) {

    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
  
    return (

      <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                
                <img src="https://tinyurl.com/5a34ph7y" alt="get in touch" />

                <p>Guess what!!!!!!!</p>
                <span>Login to discover more</span>
                </div>

            <div>
                <h1 className='heading-secondary'>
                    Just <span>Login</span>
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Email</label>
                            <input type="email" name='email' />
                        </div><br></br>

                        <div>
                            <label>Password</label>
                            <input type="password" name='pasword' />
                        </div>
                    </div>
                </form>

                <button onClick={closeForm}>Login</button>
            </div>
        </div>
    </div>

      // <>
      //   <h1>Login</h1>
  
      //   {props.hasSubmitted ? <p>{props.data}</p> : <p>Please provide the correct details</p>}
  
      //   <label htmlFor="email">
      //     <b>Email</b>
      //   </label>
      //   <input
      //     type="text"
      //     placeholder="Enter Email"
      //     name="email"
      //     required
      //     onChange={(e) => props.setEmail(e.target.value)}
      //     value={props.email}
      //   ></input>
  
      //   <label htmlFor="psw">
      //     <b>Password</b>
      //   </label>
      //   <input
      //     type="password"
      //     placeholder="Enter Password"
      //     name="psw"
      //     required
      //     onChange={(e) => props.setPassword(e.target.value)}
      //     value={props.password}
      //   ></input>
  
      //   <button type="submit" className="btn">
      //     Login
      //   </button>
  
      //   <button type="button" className="btn-cancel" onClick={closeForm}>
      //     Close
      //   </button>
      // </>
    );
  }
  