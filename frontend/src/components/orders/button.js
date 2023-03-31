import "./styling.css"

export function OrderButton(){
    return(
        <div class="dropdown">
            <button class="dropbtn">Orders</button>
            <div class="dropdown-content">
                <a href="#">Pending Orders</a>
                <a href="#">Delivered orders</a>
                <a href="#">All orders</a>
            </div>
        </div>
    );
}