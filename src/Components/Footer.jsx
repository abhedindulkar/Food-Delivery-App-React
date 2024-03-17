import { useContext, useEffect } from "react";
import UserContext from "../Utils/UserContext";
import { Image } from "./Image";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        console.log("footer useEfffect");
    }, []);

    console.log("footer rendering");

    return (
        <div className="footer py-5 bg-blue-950 mt-5">
            <div className="logo flex justify-center">
                <Image />
            </div>
            <div className="flex justify-center font-bold text-gray-100 text-xs pt-3">
                <span className="pt-1">Made With</span>
                <FavoriteIcon className="text-red-500 px-1 py-1" />
            </div>
        </div>
    );
};

export default Footer;
