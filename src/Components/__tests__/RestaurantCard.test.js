import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import UserContext from "../../Utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./../mocks/restaurantData.json";

it("should render header component", () => {
    render(
        <BrowserRouter>
            <UserContext.Provider value={{ loggedInUser: "abhed" }}>
                <RestaurantCard resData={MOCK_DATA} />
            </UserContext.Provider>
        </BrowserRouter>,
    );

    const name = screen.getByText(/Biryani Pot/);

    expect(name).toBeInTheDocument();
});
