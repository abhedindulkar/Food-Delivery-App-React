import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorElement";
import Contact from "./Components/Contact";
import Restaurant from "./Components/Restaurant";

/**
 * Header
 *  - Logo
 *  - Link Items.
 *      -
 * Body
 *  - SearchBar
 *  - Restaurant Cards
 *
 * Footer
 */

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/about-us",
                element: <About />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurant />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

// React.createElement('h1', {id: 'h1tag'}, [
//     React.createElement('div', {}, 'newTag'),
//     React.createElement('div', {}, 'newTag1')
// ]));

// const header = (
//     <h1 id="root" className="newroot" tabIndex={3}>
//       <h2>dd</h2>
//       This is from JSX
//     </h1>
//   );

//   const Component = () => {
//     return (
//       <div>
//         <h1> this is an component </h1>
//       </div>
//     );
//   };

//   const element2 = (
//     <h1>
//       this is an element2{" "}
//       <a href="">
//         <div> link</div>
//       </a>
//       <Component />
//     </h1>
//   );
//   const element = <div>{element2} this is an element</div>;

const restaurantData = [
    {
        info: {
            id: "9648",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "Korum mall",
            areaName: "Thane West",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.2,
            parentId: "166",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 31,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-korum-mall-thane-west-mumbai-9648",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "27414",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "Thane West",
            areaName: "Thane West",
            costForTwo: "₹300 for two",
            cuisines: ["Pizzas"],
            avgRating: 3.8,
            parentId: "721",
            avgRatingString: "3.8",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 31,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹179",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-hut-thane-west-mumbai-27414",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "47606",
            name: "Theobroma",
            cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
            locality: "Eastern Express Highway",
            areaName: "Thane West",
            costForTwo: "₹400 for two",
            cuisines: ["Bakery", "Desserts"],
            avgRating: 4.4,
            parentId: "1040",
            avgRatingString: "4.4",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 39,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                        shortDescription: "Perfect Cake Delivery",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                    shortDescription: "Perfect Cake Delivery",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/theobroma-eastern-express-highway-thane-west-mumbai-47606",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "65269",
            name: "Starbucks Coffee",
            cloudinaryImageId: "182191ab163770437b62861a6f987709",
            locality: "Korum Mall",
            areaName: "Thane Panchpakhadi",
            costForTwo: "₹400 for two",
            cuisines: [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream",
            ],
            avgRating: 4.3,
            parentId: "195515",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 22:30:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/starbucks-coffee-korum-mall-thane-panchpakhadi-mumbai-65269",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "93243",
            name: "McDonald's",
            cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
            locality: "Korum Mall",
            areaName: "Thane Panchpakhadi",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
            avgRating: 4.5,
            parentId: "630",
            avgRatingString: "4.5",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 26,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:45:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹199",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/mcdonalds-korum-mall-thane-panchpakhadi-mumbai-93243",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "14558",
            name: "KFC",
            cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
            locality: "Mangal Pandey Road",
            areaName: "Thane Panchpakhadi",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 4,
            parentId: "547",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 27,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-mangal-pandey-road-thane-panchpakhadi-mumbai-14558",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "28785",
            name: "Domino's Pizza",
            cloudinaryImageId: "s1ssiwiuascpfhmld9uu",
            locality: "Pokharan Road No.2",
            areaName: "Thane West",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.3,
            parentId: "2456",
            avgRatingString: "4.3",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 25,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 02:59:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/dominos-pizza-pokharan-road-no-2-thane-west-mumbai-28785",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "12349",
            name: "China Bistro",
            cloudinaryImageId: "0e1a7c54a5623c38053ffa1ed6ab9630",
            locality: "Thane West",
            areaName: "Thane West",
            costForTwo: "₹750 for two",
            cuisines: [
                "Chinese",
                "Asian",
                "Pan-Asian",
                "Sushi",
                "Japanese",
                "Korean",
                "Thai",
                "Desserts",
            ],
            avgRating: 4.5,
            parentId: "1871",
            avgRatingString: "4.5",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 36,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 00:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹200 OFF",
                subHeader: "ABOVE ₹599",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/china-bistro-thane-west-mumbai-12349",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "40541",
            name: "Silly Chilly",
            cloudinaryImageId: "dhfhimxobhmp6mlqgjit",
            locality: "Khopat, Thane West",
            areaName: "Thane West",
            costForTwo: "₹300 for two",
            cuisines: ["Chinese"],
            avgRating: 4.1,
            parentId: "187991",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 02:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/silly-chilly-khopat-thane-west-mumbai-40541",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "50483",
            name: "1441 Pizzeria",
            cloudinaryImageId: "c7fcd9e43f4b995c3cd08d7632b426f0",
            locality: "Thane West",
            areaName: "Thane West",
            costForTwo: "₹500 for two",
            cuisines: ["Italian", "Pizzas", "Pastas"],
            avgRating: 4.1,
            parentId: "2697",
            avgRatingString: "4.1",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 04:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/1441-pizzeria-thane-west-mumbai-50483",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "41575",
            name: "Hangout Cakes & More",
            cloudinaryImageId: "079d1a1551619115a435f9b557222464",
            locality: "Viviana Mall,,Thane",
            areaName: "Thane West",
            costForTwo: "₹150 for two",
            cuisines: ["Desserts", "Bakery"],
            avgRating: 4.3,
            veg: true,
            parentId: "4508",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:15:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/hangout-cakes-and-more-viviana-mall-thane-thane-west-mumbai-41575",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "47942",
            name: "Charcoal Eats - Biryani & Beyond",
            cloudinaryImageId: "d796c32a336dcce6814de6921d916966",
            locality: "Near Sulochanadevi Singhania School",
            areaName: "Samata Nagar",
            costForTwo: "₹499 for two",
            cuisines: ["Biryani", "Kebabs", "Hyderabadi", "North Indian"],
            avgRating: 4.4,
            parentId: "5338",
            avgRatingString: "4.4",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 1.5,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:45:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/charcoal-eats-biryani-and-beyond-near-sulochanadevi-singhania-school-samata-nagar-mumbai-47942",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "31779",
            name: "Subway",
            cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
            locality:
                "Eastern Express Highway, Near Jupiter Hospital, Majiwada, Thane West",
            areaName: "Thane West",
            costForTwo: "₹350 for two",
            cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
            avgRating: 4,
            parentId: "2",
            avgRatingString: "4.0",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/subway-eastern-express-highway-near-jupiter-hospital-majiwada-thane-west-mumbai-31779",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "377610",
            name: "Monginis",
            cloudinaryImageId: "c2sadxas7dqer5x3rmvx",
            locality: "Lokmanya Nagar",
            areaName: "Thane Panchpakhadi",
            costForTwo: "₹300 for two",
            cuisines: ["Bakery", "Desserts", "Snacks"],
            avgRating: 4.3,
            parentId: "5007",
            avgRatingString: "4.3",
            totalRatingsString: "50+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 1.7,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "1.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 21:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/monginis-lokmanya-nagar-thane-panchpakhadi-mumbai-377610",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "351118",
            name: "Grameen Kulfi",
            cloudinaryImageId: "tfalpdcbbdkqciuidsee",
            locality: "Pokhran Road",
            areaName: "Thane West",
            costForTwo: "₹120 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.8,
            veg: true,
            parentId: "12175",
            avgRatingString: "4.8",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 18,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 00:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "EVERY ITEM",
                subHeader: "@ ₹99",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/grameen-kulfi-pokhran-road-thane-west-mumbai-351118",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "349893",
            name: "Sweet Bengal",
            cloudinaryImageId: "vfi2nlw4m0naojp4pr9c",
            locality: "Vasant Vihar",
            areaName: "Vasant Vihar",
            costForTwo: "₹150 for two",
            cuisines: ["Sweets", "Indian", "Snacks", "Desserts"],
            avgRating: 4.6,
            veg: true,
            parentId: "1250",
            avgRatingString: "4.6",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 22:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/sweet-bengal-vasant-vihar-mumbai-349893",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "88748",
            name: "Chaayos Chai+Snacks=Relax",
            cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
            locality: "Viviana Mall",
            areaName: "Thane West",
            costForTwo: "₹250 for two",
            cuisines: [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets",
            ],
            avgRating: 4.4,
            parentId: "281782",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 32,
                lastMileTravel: 2.8,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "2.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 20:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-viviana-mall-thane-west-mumbai-88748",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "17490",
            name: "Faasos - Wraps, Rolls & Shawarma",
            cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
            locality: "acme ozone",
            areaName: "Thane West",
            costForTwo: "₹200 for two",
            cuisines: [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.1,
            parentId: "21809",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-28 23:59:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-acme-ozone-thane-west-mumbai-17490",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "48290",
            name: "Nothing But Chicken",
            cloudinaryImageId: "kmumwh3z0jshvu2byv7v",
            locality: "Ganeshwadi",
            areaName: "Panch Pakhadi West",
            costForTwo: "₹400 for two",
            cuisines: [
                "Salads",
                "Biryani",
                "Kebabs",
                "Fast Food",
                "Healthy Food",
            ],
            avgRating: 4.4,
            parentId: "668",
            avgRatingString: "4.4",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 04:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/nothing-but-chicken-ganeshwadi-panch-pakhadi-west-mumbai-48290",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "374748",
            name: "NOTO - Ice Creams & Desserts",
            cloudinaryImageId: "81ac87e5c89c16adc867be38ce5a1ba3",
            locality: "Thane",
            areaName: "Thane Hiranandani Estate",
            costForTwo: "₹300 for two",
            cuisines: ["Ice Cream"],
            avgRating: 4.4,
            veg: true,
            parentId: "468478",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-29 04:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "brand",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-thane-thane-hiranandani-estate-mumbai-374748",
            type: "WEBLINK",
        },
    },
];
