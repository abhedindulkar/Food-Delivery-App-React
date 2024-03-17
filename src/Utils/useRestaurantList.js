import { useEffect, useState } from "react";

const useRestaurantLists = () => {
    const [restaurants, setRestaurants] = useState(null);
    const [originalRestaurant, setOriginalRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("fetching restData");
        let data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.925742200000002&lng=77.69824149999998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            {
                mode: "cors",
            },
        );

        let json = await data.json();

        console.log('json', json)

        setRestaurants(
            json?.data?.cards[4]?.card.card.gridElements.infoWithStyle
                .restaurants,
        );

        setOriginalRestaurant(
            json?.data?.cards[4]?.card.card.gridElements.infoWithStyle
                .restaurants,
        );
    };

    return {
        listOfRestaurants: restaurants,
        originalRestaurant,
        setListOfRestaurants: setRestaurants,
    };
};

export default useRestaurantLists;
