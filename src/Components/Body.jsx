import RestaurantCard from "./RestaurantCard";
import restaurantData from "../Utils/restData";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Skeletons from "./Skeletons";
import "react-loading-skeleton/dist/skeleton.css";
import useRestaurantLists from "../Utils/useRestaurantList";
import FilterComponents from "./FilterComponents";

const Body = () => {
    let [searchText, setSearchText] = useState("");
    let { listOfRestaurants, originalRestaurant, setListOfRestaurants } =
        useRestaurantLists();

    function filterRestaurants() {
        let newRes = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >= 4,
        );

        setListOfRestaurants(newRes);
        return;
    }

    return (
        <div className="body pl-60 pr-60 sm:pl-40 sm:pr-40">
            <FilterComponents
                searchText={searchText}
                setSearchText={setSearchText}
                originalRestaurant={originalRestaurant}
                setListOfRestaurants={setListOfRestaurants}
                filterRestaurants={filterRestaurants}
            />
            <div className="rest-card-container grid lg:grid-cols-4 gap-1 sm:grid-cols-3">
                {listOfRestaurants === null && <Skeletons />}
                {listOfRestaurants !== null &&
                    listOfRestaurants.length > 0 &&
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard
                            resData={restaurant}
                            key={restaurant.info.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Body;
