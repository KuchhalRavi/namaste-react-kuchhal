import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    /** Start this code is now moved to useRestaurantmenu custom hook to increase more modularity */

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 

    // useEffect(() => {
    //     fetchMenu() 
    // },[])
    // 
    // console.log({resId})

   

    
    // const fetchMenu = async () => {
    //     // const data = await fetch(`${MENU_API + resId}&catalog_qa=undefined&query=Chole%20Bhature&submitAction=ENTER`);
    //     const data = await fetch(`${MENU_API + resId}`);
    //     const json = await data.json();
    //     setResInfo(json);
    // }

    /** End this code is now moved to useRestaurantmenu custom hook to increase more modularity */

    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    // const menuInfo = 
    return resInfo === null ? <Shimmer /> : (
        <div className="rest-menu-container">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu:</h2>
            <ul className="res-menu-list">
                <li>Burgers</li>
                <li>Pasta</li>
                <li>Noodles</li>
                <li>Coffee</li>
                <li>ColdDrinks</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;