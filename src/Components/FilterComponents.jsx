import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FilterComponents = ({
    searchText,
    setSearchText,
    originalRestaurant,
    setListOfRestaurants,
    filterRestaurants,
}) => {
    return (
        <div className="searchBar flex items-bottom  pl-80 my-5 justify-end">
            <TextField
                label="Restaurant"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="search-input border-gray-500 border-solid border-2 rounded-sm mr-2"
                value={searchText}
                sx={{ mr: 1 }}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <Button
                variant="outlined"
                type=""
                className=" mr-3"
                sx={{ mr: 1 }}
                onClick={() => {
                    console.log("onclick");
                    const filteredRestaurant = originalRestaurant.filter(
                        (res) => {
                            // console.log("res", res);
                            return res.info.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                        },
                    );

                    console.log("setting original restaurant");
                    setListOfRestaurants(filteredRestaurant);
                }}
            >
                Filter
            </Button>
            <Button variant="outlined" onClick={() => filterRestaurants()}>
                Filter Restaurants
            </Button>
        </div>
    );
};

export default FilterComponents;
