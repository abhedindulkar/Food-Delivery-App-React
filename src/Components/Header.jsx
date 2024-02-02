import { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginText, setLoginText] = useState("login");

    useEffect(() => {
        console.log("useEffect called");
    }, [loginText]);

    console.log("rendering");
    return (
        <div className="header">
            <div className="logo">
                <Image />
            </div>
            <div className="pageLinks">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about-us"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button
                            onClick={() => {
                                setLoginText(
                                    loginText === "login" ? "logout" : "login",
                                );
                            }}
                        >
                            {loginText}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
