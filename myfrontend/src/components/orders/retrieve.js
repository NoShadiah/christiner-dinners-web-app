import {useState, useEffect} from "react";

export function Orders() {
    

    // Fecth orders
    const[orders, setOrders] = useState([])
    useEffect(()=>{
        
        
        const fetchOrders =() =>{
            fetch('http://localhost:5000/api/v2/orders/all',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
          }).then((response) => response.json())
            .then((data)=>{setOrders(data.data); localStorage.setItem('Myorders', JSON.stringify(data.data))})
            
           
        }
        fetchOrders();
    }, [])
    // console.log("orders state:",orders)
    // console.log("storageorders", JSON.parse(localStorage.getItem("myorders")))
    return (
            <div className='section'>
                <h3>A list of my order Items</h3>
                <div className='list'>
                   <table>
                         <tr className="head">
                            <th>Id</th>
                            <th>Made by</th>
                            <th>Menu Item</th>
                            <th>Quantity</th>
                            <th>Grand Total</th>
                            <th>Delivery address</th>
                            <th>Made at</th>
                            <th>Needed by</th>
                            <th>Updated at</th>
                            <th>Status</th>
                        </tr>
                        {
            orders?.map(orderitem =>(
                                <tr className="head">
                                    <td>{orderitem["id"]}</td>
                                    <td>{orderitem["made_by"]}</td>
                                    <td>{orderitem["menu_item"]}</td>
                                    <td>{orderitem["delivery_address"]}</td>
                                    <td>{orderitem["needed_by"]}</td>
                                    <td>{orderitem["quantity"]}</td>
                                    <td>{orderitem["made_at"]}</td>
                                    <td>{orderitem["updated_by"]}</td>
                                    <td>{orderitem["updated_at"]}</td>
                                    <td>{orderitem["status"]}</td>
                                </tr>))
                        }
                                
                   </table>
                    </div>
                </div>
        )
}