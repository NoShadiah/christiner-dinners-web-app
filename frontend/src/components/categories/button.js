import "./styling.css"

export function FoodCategoriesButton(){
    return(
        <div class="dropdown">
            <p class="dropbtn">Categories</p>
            <div class="dropdown-content">
                <a href="#">Pending Orders</a>
                <a href="#">Delivered orders</a>
                <a href="#">All orders</a>
            </div>
        </div>
    );
}