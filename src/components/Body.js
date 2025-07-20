import RestaurantCard from "./RestuarantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [restaurantData, setRestaurantData] = useState(restaurantList);
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <button className="filter-btn" 
                    onClick = {() =>{
                        console.log("button clicked")

                        const filteredList = restaurantData.filter(res => res.rating >= 4);
                        setRestaurantData(filteredList);

                        }}>Top Rated Res</button>
            <div className="restaurant-container">
                {
                    restaurantData.map((restaurant, index) => <RestaurantCard key={index} dataSet = {restaurant} />)

                }
            </div>
        </div>
    );
 };
 export default Body;