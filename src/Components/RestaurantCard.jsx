import Skeleton from "react-loading-skeleton";
import REST_IMG_URL from "../Utils/constants";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import StarRatings from "./StarRatings";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, cloudinaryImageId } =
        props?.resData?.info;
    const { deliveryTime } = props?.resData?.info?.sla;
    const link = props?.resData?.cta?.link.split("/");
    const { loggedInUser } = useContext(UserContext);

    const actualLink = link[link.length - 1];

    const resLinkData = actualLink.split("-");

    const resId = resLinkData[resLinkData.length - 1];

    return (
        <div
            data-testid="resCard"
            className="mx-1 my-1 border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-100 duration-300 w-80"
        >
            <Link to={`restaurants/${resId}`} className="rest-card">
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
                <div className="cuisines text-gray-600 text-sm">
                    {cuisines.join(", ")}
                </div>
                <div className="stars">
                    <StarRatings stars={avgRating} />
                </div>
                <div className="time text-sm pt-1 text-gray-500 font-medium">
                    <DeliveryDiningIcon className="pr-1 pb-1 text-gray-500" />
                    in {deliveryTime} minutes
                </div>
            </Link>
        </div>
    );
};

export const withDeliveryTag = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </>
        );
    };
};

export default RestaurantCard;
