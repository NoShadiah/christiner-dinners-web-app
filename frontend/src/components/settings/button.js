import "./styling.css"

export function SettingsButton(){
    return(
        <div className="dropdown">
            <button className="dropbtn">Settings</button>
            <div className="dropdown-content">
                <button id="btn">Pending Orders</button>
                <button id="btn">Delivered orders</button>
                <button id="btn">All orders</button>
            </div>
        </div>
    );
}