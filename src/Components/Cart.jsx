import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
    const cart = useSelector((store) => store.cart.cart);

    return (
        <div>
            <div className="cart-container w-6/12 m-auto min-h-[70vh]">
                <div className="cart-header pt-8">
                    <h1 className="text-center text-lg font-bold">CART</h1>
                </div>
                <div className="in-cart pt-3">
                    {cart.map((item) => (
                        <CartItem cart={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
