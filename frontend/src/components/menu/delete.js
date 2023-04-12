import React, {useState, useEffect} from "react";

export function DeleteItem(props){
    const[message, setMessage] = useState("")
    useEffect(()=>{
        const DeleteProduct =() => {
            const myURL = 'http://localhost:5000/api/v2/menu/item/'+ props.Id
            const NoSpaces = myURL.replace(/ /g, " ");
            fetch(NoSpaces, {
                methods:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=> response.json())
            .then((info)=>{setMessage(info.message); localStorage.setItem('my menu item', JSON.stringify(info))})
        }
        DeleteProduct()
},[])}