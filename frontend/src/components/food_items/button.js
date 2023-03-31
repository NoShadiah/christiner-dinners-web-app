import "../categories/styling.css"

export function FoodItemsButton(){
    return(
        <div class="dropdown">
            <button class="dropbtn">Food Items</button>
            <div class="dropdown-content">
                <a href="#">Pending Orders</a>
                <a href="#">Delivered orders</a>
                <a href="#">All orders</a>
            </div>
        </div>
    );
}