import { useContext, useEffect, useState } from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector, useStore } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    const [loginText, setLoginText] = useState("login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    // console.log("context data", data);

    const cartItems = useSelector((store) => store.cart.cart);

    useEffect(() => {
        console.log("cartItems", cartItems);
    }, [cartItems]);

    console.log("rendering Header");
    return (
        <div className="flex justify-between py-4 bg-gray-100">
            <div className="logo pl-72">
                <Image />
            </div>
            <div className="pageLinks pr-52 flex items-center capitalize font-bold text-gray-500">
                <ul className="flex">
                    {/* <li className="flex">
                        <span className="pr-3">Online Status</span>
                        {onlineStatus && <TiTick color="green" size="25px" />}
                        {!onlineStatus && <RxCross2 color="red" size="25px" />}
                    </li> */}
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    {/* <li className="px-4">
                        <Link to={"/about-us"}>About</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact-us"}>Contact</Link>
                    </li> */}
                    <li className="px-4">
                        <Link to={"/cart"}>
                            <ShoppingCartIcon />
                        </Link>
                    </li>
                    <li className="px-4 ">
                        <button
                            className="capitalize"
                            onClick={() => {
                                setLoginText(
                                    loginText === "login" ? "logout" : "login",
                                );
                            }}
                        >
                            {loginText === "login" ? (
                                <LogoutIcon />
                            ) : (
                                <LoginIcon />
                            )}
                        </button>
                    </li>
                    {/* <li>{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
