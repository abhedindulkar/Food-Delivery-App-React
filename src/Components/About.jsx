import { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    useEffect(() => {
        getDocument();
    }, []);

    const getDocument = async () => {
        const document = await fetch(
            "https://www.swiggy.com/restaurants/chinese-wok-lb-marg-thane-panchpakhadi-mumbai-43308",
        );
        return;
    };
    return (
        <div>
            <h1>About Page Section New</h1>
            <User name={"abhed"} location={"Thane"} />
            <UserClass name={"abhed"} location={"Thane"} />
        </div>
    );
};

export default About;
