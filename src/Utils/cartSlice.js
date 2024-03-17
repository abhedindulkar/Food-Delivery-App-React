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
            // state.items.push(actions.payload);

            // console.log(actions.payload);
            // console.log('finding the duplicate', current(state).items.find((item) => {
            //     // console.log('item', item)
            //     return item.name  === actions.payload.name
            // }))

            // let item = [...current(state)].items.filter((item) => {
            //     console.log('item', item)
            //     return item.name === actions.payload.name
            // });

            // console.log('after filtering', item);
            // if (item === null)
            // {
            state.items = actions.payload;

            // return
            // }

            // state.items;
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
