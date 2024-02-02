import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeletons = () => {
    return (
        <>
            {[...Array(10)].map((e, i) => (
                <div className="rest-card">
                    <Skeleton height={200} />
                    <Skeleton count={1} />
                    <Skeleton count={1} style={{ width: "50%" }} />
                    <Skeleton count={1} style={{ width: "30%" }} />
                    <Skeleton width={30} style={{ width: "30%" }} />
                </div>
            ))}
        </>
    );
};

export default Skeletons;
