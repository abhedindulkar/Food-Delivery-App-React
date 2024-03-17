import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import resMockData from "../mocks/restsMockData.json";
import "@testing-library/jest-dom";
import { before } from "lodash";
// import {scrren}

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(resMockData),
    });
});

// jest.mock("../Image", () => {
//     // Return a mock implementation of the Image component
//     return () => <div>Mocked Image Component</div>;
// });

it("should load body component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        ),
    );

    const searchButton = screen.getByRole("button", { name: "Filter" });

    const searchInput = screen.getByRole("textbox");

    const beforeSearch = screen.getAllByTestId("resCard");

    expect(beforeSearch.length).toBe(9);

    fireEvent.change(searchInput, { target: { value: "Vaibhava" } });

    fireEvent.click(searchButton);

    const afterSearch = screen.getAllByTestId("resCard");

    expect(afterSearch.length).toBe(1);
});
