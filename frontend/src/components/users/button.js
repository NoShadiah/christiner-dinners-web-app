import "./styling.css"

export function UsersButton(){
    return(
        <div class="dropdown">
            <button class="dropbtn">Users</button>
            <div class="dropdown-content">
                <a href="#">Pending Orders</a>
                <a href="#">Delivered orders</a>
                <a href="#">All orders</a>
            </div>
        </div>
    );
}