 const RestaurantCard = (props) =>{
    console.log('info',props)
    const {name, avgRating, delivery_time, cuisines, image_url, sla, areaName} = props?.dataSet;
    return (
        <div className="res-card">
            <img className = "res-logo" src={image_url}/>
            <h3>{name}</h3>
            <h4>{avgRating} * {sla.slaString}</h4>
            <h4>{delivery_time}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
        </div>
    )
 }
 export default RestaurantCard;