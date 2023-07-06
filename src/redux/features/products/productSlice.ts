import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductsFilter {
    status: boolean;
    priceRange: number;
}

const initialState: IProductsFilter = {
  status: true,
  priceRange: 150,
};

const products= createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleState: (state)=>{
            state.status=!state.status
        },
        setPriceRange: (state, action: PayloadAction<number>)=>{
            state.priceRange=action.payload
        }
    }
})

export const { toggleState, setPriceRange } = products.actions;

export default products.reducer;