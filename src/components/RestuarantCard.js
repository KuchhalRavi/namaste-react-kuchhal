 const RestaurantCard = (props) =>{
    const {name, rating, delivery_time, cuisines, location, starting_price, image_url} = props?.dataSet;
    return (
        <div className="res-card" style = {{backgroundColor:"yellow"}}>
            <img className = "res-logo" src={image_url}/>
            <h3>{name}</h3>
            <h4>{rating}</h4>
            <h4>{delivery_time}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
 }
 export default RestaurantCard;