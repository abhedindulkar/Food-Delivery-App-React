import Skeleton from "react-loading-skeleton";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import StarIcon from "@mui/icons-material/Star";

const RestaurantHeader = ({ headerData }) => {
    return (
        <div>
            <div className="header-wrapper flex justify-between">
                <div className="header-address w-9/12 ">
                    <div className="text-2xl font-semibold text-gray-500 pb-1">
                        {headerData.length !== 0 ? (
                            headerData[0].card.card.info.name
                        ) : (
                            <Skeleton
                                style={{ height: "100px", width: "100%" }}
                            />
                        )}
                    </div>
                    <div className="text-gray-600 text-xs pt-2">
                        {headerData.length !== 0 ? (
                            headerData[0].card.card.info.labels[2].message
                        ) : (
                            <>
                                <Skeleton
                                    style={{ height: "50px", width: "100%" }}
                                />
                                <Skeleton
                                    style={{
                                        height: "50px",
                                        width: "100%",
                                        marginTop: "10px",
                                    }}
                                />
                                <Skeleton
                                    style={{
                                        height: "50px",
                                        width: "100%",
                                        marginTop: "10px",
                                    }}
                                />
                                <Skeleton
                                    style={{
                                        height: "50px",
                                        width: "100%",
                                        marginTop: "10px",
                                    }}
                                />
                                <Skeleton
                                    style={{
                                        height: "50px",
                                        width: "100%",
                                        marginTop: "10px",
                                    }}
                                />
                            </>
                        )}
                    </div>
                    <div className="text-gray-600 text-xs pt-1 pb-2">
                        {headerData.length !== 0 ? (
                            headerData[0].card.card.info.areaName
                        ) : (
                            <Skeleton
                                style={{ height: "50px", width: "100%" }}
                            />
                        )}
                    </div>
                    <div className="text-gray-600 text-xs pt-1">
                        {headerData.length !== 0 ? (
                            <>
                                <DirectionsBikeIcon
                                    fontSize="small"
                                    className="pb-1 pr-1"
                                />
                                {
                                    headerData[0].card.card.info.feeDetails
                                        .message
                                }
                            </>
                        ) : (
                            <Skeleton
                                style={{ height: "50px", width: "100%" }}
                            />
                        )}
                    </div>
                </div>
                {headerData.length !== 0 ? (
                    <div className="header-stars w-17">
                        <div className="star-card rounded  border-2 border-sky-700 p-2">
                            <div className="rating text-xl border-b-2 border-gray-300 text-center pb-1 text-sky-700">
                                <>
                                    <StarIcon
                                        fontSize="medium"
                                        className="pr-1 pb-1"
                                    />
                                    {
                                        headerData[0].card.card.info
                                            .avgRatingString
                                    }
                                </>
                            </div>
                            <div className="total-ratings text-xs py-2 font-mono">
                                {
                                    headerData[0].card.card.info
                                        .totalRatingsString
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-17 text-gray-600 ">
                        <Skeleton style={{ height: "100px", width: "100%" }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantHeader;
