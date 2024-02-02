import Skeleton from "react-loading-skeleton";
import REST_IMG_URL from "../Utils/constants";

const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, cloudinaryImageId } =
        props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;

    return (
        <div className="rest-card">
            <div className="image">
                {cloudinaryImageId !== null && (
                    <img src={REST_IMG_URL + cloudinaryImageId} alt="" />
                )}
                {cloudinaryImageId == null && <Skeleton count={10} />}
            </div>
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="stars">{avgRating} stars</div>
            <div className="time">{deliveryTime} minutes</div>
        </div>
    );
};

export default RestaurantCard;
