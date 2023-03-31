

export function Users() {
    const[users, setusers] = useState([])
    // console.log("users state:",users)

    // Fecth users
    const fetchusers =() =>{
        fetch('http://127.0.0.1:5000/api/v2/users/all')
        .then((response) => 
        // console.log("API response",
        response.json() )
        .then((data)=>setusers(data.users))
        // console.log("users state:",users)
    }
    const fetchuser = (id) =>{
        fetch('http://127.0.0.1:5000/api/v2/users/all')
    }
    useEffect(()=>{
        fetchusers()
    }, [])

    return (
        <div className='users-section'>
            <h3>A list of my users</h3>
            <div className='users-list'>
            {
    users.map(user =>
    <>
    <span>{user.first_name}</span><br></br>
    <span>{user.last_name}</span><br></br>
    <span>{user.email}</span><br></br>
    </>)}
            </div>
        </div>
    )
    }