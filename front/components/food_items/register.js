import React, {useState} from "react";


export function RegisterFoodItem(){
    const [name, setName]= useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const user_id = 1
    const ChangeName=(e)=>{
        setName(e.target.value)
       
        console.log(name)

    }   
    const ChangeImage=(e)=>{
        setImage(e.target.value)
    
        console.log(Image)

    }
    const ChangeDescription=(e)=>{
        setDescription(e.target.value)
       
        console.log(name)

    }
    
    function InsertFoodItem(){
        const data ={
            name,
            image,
            description,
            user_id
        }
        fetch("http://localhost:5000/api/v2/fooditems/register", {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
    const handleSubmit=(event)=>{ 
        event.preventDefault()
        InsertFoodItem()
        setName('')
        setImage('')
        setDescription('')
    }

    return(
        <div id='form1'>
        <h1>Enter Food Item Details</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input 
                type='text'
                value={name}
                onChange={ChangeName}
                required
                />
            </div>
            <div>
                <label>Image: </label>
                <input 
                type='text'
                value={image}
                onChange={ChangeImage}
                required
                />
            </div>
            <div>
                <label>Enter description: </label>
                <input 
                type='text'
                value={description}
                onChange={ChangeDescription}
                required/>
                
            </div>
            
            <div>
                <button >Submit</button>
                <p>Submit form the form and hit the save button to Save the user</p>
            </div>
        </form>

</div>
    );
}