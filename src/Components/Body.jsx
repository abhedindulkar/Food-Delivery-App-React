import RestaurantCard from "./RestaurantCard";
import restaurantData from "../Utils/restData";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Skeletons from "./Skeletons";
import "react-loading-skeleton/dist/skeleton.css";
import { filter } from "lodash";

const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [originalRestaurant, setOriginalRestaurant] = useState([]);
    let [searchText, setSearchText] = useState("");

    function filterRestaurants() {
        let newRes = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4,
        );

        console.log("newRes", newRes);
        // console.log('')

        setListOfRestaurants(newRes);
        return;
    }

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2181714&lng=72.9582367&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            {
                mode: "cors",
            },
        );

        // console.log("data", await data.json());

        let json = await data.json();

        console.log(
            "json",
            json?.data?.cards[4]?.card.card.gridElements.infoWithStyle
                .restaurants,
        );

        setListOfRestaurants(
            json?.data?.cards[4]?.card.card.gridElements.infoWithStyle
                .restaurants,
        );

        setOriginalRestaurant(
            json?.data?.cards[4]?.card.card.gridElements.infoWithStyle
                .restaurants,
        );

        // console.log("set list", listOfRestaurants);
    };

    return (
        <div className="body">
            <div className="searchBar">
                <input
                    type="text"
                    className="search-input"
                    value={searchText}
                    onChange={(e) => {
                        // console.log("changing filter values");
                        setSearchText(e.target.value);

                        // console.log("newtext", searchText);
                    }}
                />
                <button
                    type="button"
                    onClick={() => {
                        console.log("onclick");
                        const filteredRestaurant = originalRestaurant.filter(
                            (res) => {
                                // console.log("res", res);
                                return res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase());
                            },
                        );

                        setListOfRestaurants(filteredRestaurant);
                    }}
                >
                    Filter
                </button>
                <button type="button" onClick={() => filterRestaurants()}>
                    Filter Restaurants
                </button>
            </div>
            <div className="rest-card-container">
                {listOfRestaurants.length > 0 &&
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard
                            resData={restaurant}
                            key={restaurant.info.id}
                        />
                    ))}
                {listOfRestaurants.length === 0 && <Skeletons />}
            </div>
        </div>
    );
};

export default Body;
