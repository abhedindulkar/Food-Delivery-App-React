import Skeleton from "react-loading-skeleton";
import REST_IMG_URL from "../Utils/constants";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { CardActionArea } from "@mui/material";
// import { CardContent } from "@mui/material";

const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, cloudinaryImageId } =
        props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;
    const link = props?.resData?.cta?.link.split("/");

    const actualLink = link[link.length - 1];

    return (
        <div className="mx-0 my-1 border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-100 duration-300">
            <Link to={`restaurants/${actualLink}`} className="rest-card">
                <div className="image">
                    {cloudinaryImageId !== null && (
                        <img
                            className="h-60 w-full rounded-lg"
                            src={REST_IMG_URL + cloudinaryImageId}
                            alt=""
                        />
                    )}
                    {cloudinaryImageId == null && <Skeleton count={10} />}
                </div>
                <div className="font-medium text-gray-700 mt-2 uppercase">
                    {name}
                </div>
                <div className="cuisines">{cuisines.join(", ")}</div>
                <div className="stars">{avgRating} stars</div>
                <div className="time">{deliveryTime} minutes</div>
            </Link>
        </div>
    );
};

export default RestaurantCard;
