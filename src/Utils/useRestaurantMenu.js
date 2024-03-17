import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { assignItems } from "./cartSlice";

const useRestaurantMenu = () => {

    const {resId} = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let data = await 
        fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.925742200000002&lng=77.69824149999998&restaurantId=489129&catalog_qa=undefined&submitAction=ENTER',
        {
            mode: "cors",
        });

        let json = await data.json();

        console.log('restaurantMenu in usemenu', json);
        // setRestaurantMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        setRestaurantMenu(json.data.cards);

        dispatch(assignItems(json.data.cards));

        //for rest -> json.data.cards[0].card.card.info.name
        //for Menu => json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        // return ;
    }

    return restaurantMenu;
}

export default useRestaurantMenu;