import React from "react";
import REST_IMG_URL from "../Utils/constants";

function CartItem({ cart }) {
    return (
        <div className="flex justify-between my-2 border-gray-100 border-2">
            <div className="menu-description w-9/12 p-3">
                <div className="menu-item font-normal text-base">
                    {cart.name}
                </div>
                <div>Quantity: {cart.quantity}</div>
            </div>
            <div className="menu-image-container relative">
                <img
                    className="rounded-lg w-28"
                    src={REST_IMG_URL + cart.imageId}
                    alt=""
                />
            </div>
        </div>
    );
}

export default CartItem;
