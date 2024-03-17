import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import UserContext from "../../Utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/appStore";

test("test contact us page", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("button");

    // Assertion
    expect(heading.length).not.toBe(3);
    // expect()
});
