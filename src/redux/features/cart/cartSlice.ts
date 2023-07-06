import { IProduct } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICart{
    products: IProduct[];
}

const initialState: ICart = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action: PayloadAction<IProduct>) => {
            // state.products.push(action.payload)
            const existing=state.products.find((product)=>product._id===action.payload._id)
            if(existing){
                existing.quantity!++
            }else{
                state.products.push({...action.payload, quantity: 1})
            }
        }
    }

});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;