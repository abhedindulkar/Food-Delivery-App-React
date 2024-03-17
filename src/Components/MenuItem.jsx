import { useDispatch } from "react-redux";
import { addQuantity } from "../Utils/cartSlice";
import REST_IMG_URL from "../Utils/constants";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const MenuItem = ({ menuItemInfo }) => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    console.log("menuItem 2", menuItemInfo);

    const handleAddItem = (item) => {
        const price = item.price ? item.price / 100 : item.defaultPrice / 100;
        const quantity = 1;
        const name = item.name;
        const imageId = item.imageId;

        dispatch(addQuantity({ price, quantity, name, imageId }));
        handleClick();
    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className="menu-item-container py-2 border-b-2 border-gray-300 last:border-0 flex justify-between items-center duration-300">
            <div className="menu-description w-9/12">
                <div className="menu-item font-normal text-base">
                    {menuItemInfo.name}
                </div>
                <div className="menu-item-coupons text-sm pt-[2px] pb-1">
                    {menuItemInfo.price
                        ? menuItemInfo.price / 100
                        : menuItemInfo.defaultPrice / 100}
                </div>
                <div className="description text-sm font-thin text-gray-500">
                    {menuItemInfo.description}
                </div>
            </div>
            <div className="menu-image-container relative">
                <img
                    className="rounded-lg w-28"
                    src={REST_IMG_URL + menuItemInfo.imageId}
                    alt=""
                />
                <button
                    onClick={() => handleAddItem(menuItemInfo)}
                    className="absolute bottom-0 right-7 text-sm uppercase py-1 px-2 border-2 border-green-300 rounded bg-white text-green-600"
                >
                    Add +
                </button>
            </div>
            <div className="snackbar">
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Quantity Added"
                    action={action}
                />
            </div>
        </div>
    );
};

export default MenuItem;
