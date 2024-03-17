import StarIcon from "@mui/icons-material/Star";

const StarRatings = ({ stars }) => {
    let filled = Math.floor(stars === undefined ? 0 : stars);
    let nonFilled = Math.floor(5 - filled);

    return (
        <div className="flex flex-wrap justify-start pt-1">
            {[...Array(Math.floor(filled))].map((e, i) => (
                <StarIcon className="text-yellow-500" />
            ))}
            {[...Array(nonFilled)].map((e, i) => (
                <StarIcon className="text-gray-400 w-" />
            ))}
        </div>
    );
};

export default StarRatings;
