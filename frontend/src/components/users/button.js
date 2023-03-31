import "./styling.css"

export function UsersButton(){
    return(
        <div className="dropdown">
            <button className="dropbtn">Users</button>
            <div className="dropdown-content">
                <button id="btn">Pending Orders</button>
                <button id="btn">Delivered orders</button>
                <button id="btn">All orders</button>
            </div>
        </div>
    );
}