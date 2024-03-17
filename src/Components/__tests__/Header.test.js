import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import UserContext from "../../Utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";
import "@testing-library/jest-dom";

it("should render header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                {/* <UserContext.Provider value={{ loggedInUser: "abhed" }}> */}
                <Header />
                {/* </UserContext.Provider> */}
            </Provider>
        </BrowserRouter>,
    );

    const logInButton = screen.getByRole("button", { name: "login" });

    fireEvent.click(logInButton);

    const logOutButton = screen.getByRole("button", { name: "logout" });

    expect(logOutButton).toBeInTheDocument();
});
