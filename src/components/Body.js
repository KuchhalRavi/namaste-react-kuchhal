import RestaurantCard from "./RestuarantCard";
import { restaurantList } from "../utils/mockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnlineUser from "../utils/useOnlineUser";
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchData();
    },[])

    const handleSearchData = () => {
        const filtered = restaurantList.filter(res =>
            res.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setRestaurantData(filtered);
    }
    const fetchData = async () => {
        // swiggy api to fetch restaurant data
        const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
        const resultData = await data.json();
        // console.log('resultData')
        if (resultData) {
            setRestaurantData(resultData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle?.
            restaurants);
        }
    }

    // if(restaurantData.length === 0)
    // {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    if(useOnlineUser() === false) return <h1>Looks Like you are offline now!!! Please check your internet connection</h1> 
    return restaurantData.length === 0 ? (
        <Shimmer />
    )  : (
        <div className="body">
            <div className="search">
                <input className="search-input" type="text" value={searchValue} placeholder="Type to search" onChange={(e) => setSearchValue(e.target.value)}/>
                <button className="search-btn" onClick={handleSearchData} >Click to Search</button>
            </div>
            <button className="filter-btn" 
                    onClick = {() =>{
                        const filteredList = restaurantData.filter(res => res.rating >= 4);
                        setRestaurantData(filteredList);

                        }}>Top Rated Res</button>
                        {console.log(restaurantData)}
            <div className="restaurant-container">
                {
                    
                    restaurantData.map((restaurant, index) => 

                    <Link key={index} to={`/restaurants/${restaurant?.info?.id}`}><RestaurantCard dataSet = {restaurant?.info} /></Link>
                    )
                }
            </div>
        </div>
    );
 };
 export default Body;