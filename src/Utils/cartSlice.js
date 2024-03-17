import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cart: [],
        total: 0,
    },
    reducers: {
        assignItems(state, actions) {
            state.items = actions.payload;
        },

        addQuantity(state, action) {
            const { name } = action.payload;
            const existingItem = state.cart.find((item) => item.name === name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});

export const { assignItems, addQuantity } = cartSlice.actions;

export default cartSlice.reducer;
