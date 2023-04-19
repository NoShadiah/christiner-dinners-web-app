import { useState, useEffect } from "react";


export function SearchProduct(){
    const[item, setItem] = useState()
    const[menuItem, setMenuItem] = useState()

    const ChangeItem=(e)=>{
        setItem(e.target.value)
       
        console.log(item)

    }

    useEffect(()=>{
        const singleProduct =() => {
            const myURL = 'http://localhost:5000/api/v2/menu/item/'+ item 
            const NoSpaces = myURL.replace(/ /g, " ");
            fetch(NoSpaces, {
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=> response.json())
            .then((info)=>{setMenuItem(info.details); localStorage.setItem('my menu item', JSON.stringify(info))})
        }
      singleProduct();
    },[item])
    const OneItem=()=>{
        return (
            <>
            <div classnmae='section'>
               <div className="list">
                    <div className="menuitem">
                                    <div>
                                        <img src={menuItem["image"]} alt="Item image"/>
                                    </div>
                                    <div>
                                            
                                            <h3>{menuItem["id"]}:{menuItem["name"]}</h3>
                                            <p>Description: {menuItem["description"]}</p>
                                            <h4>Price: {menuItem["price_unit"]} {menuItem["price"]}</h4>
                                            <p>Served at: {menuItem["served_at"]}</p>
                                            <p>Under category: {menuItem["category"]}</p> 
                                            
                                    </div>
                                    <div>   <br></br><br></br>
                                            
                                            <p>Registered by: {menuItem["registered_by"]}</p>
                                            <p>Registered at: {menuItem["reg_at"]}</p>
                                            <p>Updated by: {menuItem["updated_by"]}</p>
                                            <p>Updated at: {menuItem["updated_at"]}</p>
                                            
                                    </div>
                                    
                    </div>
               </div>
        </div></>
        )
    }
    const[returnItem, setReturnItem] = useState("")

return (
    <div>
                <form >
                <input
                type="text"
                placeholder="enter menu item number"
                onChange={ChangeItem}
                value={item}
                />
                <button onClick={(e)=>{e.preventDefault(); setReturnItem("Searched Item");}}>Search</button>
                </form>
                <div>
                    {returnItem === "Searched Item" && <OneItem/>}
                </div>
            </div>
)

}