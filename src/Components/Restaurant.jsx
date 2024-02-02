import { useParams } from "react-router-dom";

const Restaurant = () => {
    const { resId } = useParams();

    return <div>This is restaurant Page with Id {resId}</div>;
};

export default Restaurant;
