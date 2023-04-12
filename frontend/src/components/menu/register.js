import React, {useState} from "react";


export function RegisterMenuItem(){
    const [name, setName]= useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [served_at, setServedAt] = useState("")
    
    const user_id = 11
    const ChangeName=(e)=>{
        setName(e.target.value)
       
        console.log(name)

    }   
    const ChangeImage=(e)=>{
        setImage(e.target.value)
    
        console.log(image)

    }
    const ChangeDescription=(e)=>{
        setDescription(e.target.value)
       
        console.log(description)

    }
    const ChangePrice=(e)=>{
        setPrice(e.target.value)
       
        console.log(price)

    }
    const ChangeCategory=(e)=>{
        setCategory(e.target.value)
       
        console.log(category)

    }
    const ChangeServedAt=(e)=>{
        setServedAt(e.target.value)
       
        console.log(served_at)

    }
    
    function InsertMenuItem(){
        const data ={
            name,
            image,
            description,
            price,
            served_at,
            category_id:category,
            user_id
        }
        fetch("http://localhost:5000/api/v2/menu/register", {
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
        InsertMenuItem()
        setName('')
        setImage('')
        setDescription('')
    }

    return(
        <div id='form1'>
        <h1>Enter Menu Item Details</h1>
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
                <label>Description: </label>
                <input 
                type='text'
                value={description}
                onChange={ChangeDescription}
                required/>
                
            </div>
            <div>
                <label>Category ID</label>
                <input 
                type='text'
                value={category}
                onChange={ChangeCategory}
                required/>
                
            </div>
            <div>
                <label>Price</label>
                <input 
                type='text'
                value={price}
                onChange={ChangePrice}
                required/>
                
            </div>
            <div>
                <label>Served at</label>
                <input 
                type='text'
                value={served_at}
                onChange={ChangeServedAt}
                required/>
                
            </div>
            
            <div>
                <button >Add Item</button>
                <p>Submit form the form and hit the save button to Save the user</p>
            </div>
        </form>

</div>
    );
}