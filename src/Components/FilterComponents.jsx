import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FilterComponents = ({
    searchText,
    setSearchText,
    originalRestaurant,
    setListOfRestaurants,
    resetRestaurants,
    filterRestaurants,
}) => {
    return (
        <div className="searchBar flex items-bottom my-5 justify-center">
            <TextField
                label="Restaurant"
                id="outlined-size-small"
                data-testid="restFilter"
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
                className="mr-3"
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
            <Button
                variant="outlined"
                className="mr-3"
                sx={{ mr: 1 }}
                onClick={() => filterRestaurants()}
            >
                Top Restaurants
            </Button>
            <Button variant="outlined" onClick={() => resetRestaurants()}>
                Reset Search
            </Button>
        </div>
    );
};

export default FilterComponents;
