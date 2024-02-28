import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        console.log("footer useEfffect");
    }, []);

    console.log("footer rendering");

    return (
        <div className="footer">
            <ul>
                <li className="header">Company</li>
                <li>About</li>
                <li>Team</li>
                <li>Career</li>
            </ul>
        </div>
    );
};

export default Footer;
