import RestaurantCard, { withDeliveryTag } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Skeletons from "./Skeletons";
import "react-loading-skeleton/dist/skeleton.css";
import useRestaurantLists from "../Utils/useRestaurantList";
import FilterComponents from "./FilterComponents";
import React from "react";

const Body = () => {
    let [searchText, setSearchText] = useState("");
    let { listOfRestaurants, originalRestaurant, setListOfRestaurants } =
        useRestaurantLists();
    let restaurantCardWithFreeDelivery = withDeliveryTag(RestaurantCard);

    function filterRestaurants() {
        let newRes = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >= 4,
        );

        setListOfRestaurants(newRes);
        return;
    }

    const resetRestaurants = () => {
        setSearchText("");
        setListOfRestaurants(originalRestaurant);
        return;
    };

    return (
        <div className="body pl-60 pr-60 sm:pl-40 sm:pr-40 min-h-[70vh]">
            <FilterComponents
                searchText={searchText}
                setSearchText={setSearchText}
                originalRestaurant={originalRestaurant}
                setListOfRestaurants={setListOfRestaurants}
                filterRestaurants={filterRestaurants}
                resetRestaurants={resetRestaurants}
            />
            <div
                className="rest-card-container flex flex-wrap justify-center"
                key="rescard"
            >
                {listOfRestaurants === null && <Skeletons />}
                {listOfRestaurants !== null &&
                    listOfRestaurants.length > 0 &&
                    listOfRestaurants.map((restaurant) => (
                        <React.Fragment key={restaurant.info.id}>
                            {restaurant.loyaltyDiscoverPresentationInfo ? (
                                <restaurantCardWithFreeDelivery
                                    resData={restaurant}
                                    key={restaurant.info.id}
                                />
                            ) : (
                                <RestaurantCard
                                    resData={restaurant}
                                    key={restaurant.info.id}
                                />
                            )}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default Body;
