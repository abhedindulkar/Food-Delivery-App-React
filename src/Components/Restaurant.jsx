import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Skeleton from "react-loading-skeleton";
import { list } from "postcss";
import REST_IMG_URL from "../Utils/constants";
import { useContext, useState, useEffect } from "react";
import UserContext from "../Utils/UserContext";
import { addQuantity, assignItems } from "../Utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import RestaurantHeader from "./RestaurantHeader";
import MenuItem from "./MenuItem";
import CategoryList from "./CategoryList";

const Restaurant = () => {
    const { resId } = useParams();
    const [showList, setShowList] = useState(null);
    const [restaurantMenus, setRestaurantMenu] = useState(null);
    // const resId = useParams();

    // const restaurantMenu = useRestaurantMenu(); // * Previously used for storing restaurant data
    // useRestaurantMenu();
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setRestaurantMenu(null);
        dispatch(assignItems([]));

        let data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.925742200000002&lng=77.69824149999998&restaurantId=" +
                resId +
                "&catalog_qa=undefined&submitAction=ENTER",
            {
                mode: "cors",
            },
        );

        let json = await data.json();

        console.log("restaurantMenu in usemenu", json);
        // setRestaurantMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        setRestaurantMenu(json.data.cards);

        dispatch(assignItems(json.data.cards));

        //for rest -> json.data.cards[0].card.card.info.name
        //for Menu => json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        // return ;
    }

    const dispatch = useDispatch();
    const restaurantMenu = useSelector((state) => state.cart.items);

    console.log("restaurantMenu", restaurantMenu);

    return (
        <div>
            <div className="restaurant-container w-6/12 m-auto min-h-[75vh]">
                <div className="restaurant-name pt-8">
                    <RestaurantHeader headerData={restaurantMenu} />
                </div>
                <div className="restaurant-categories">
                    {restaurantMenu.length !== 0 &&
                        restaurantMenu[2].groupedCard.cardGroupMap.REGULAR.cards
                            .filter(
                                (item) =>
                                    item.card.card["@type"] ===
                                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            )
                            .map((item) => (
                                <CategoryList
                                    key={item.card.card.title}
                                    lists={item.card.card}
                                    showList={showList}
                                    setShowList={(title) => setShowList(title)}
                                />
                            ))}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
