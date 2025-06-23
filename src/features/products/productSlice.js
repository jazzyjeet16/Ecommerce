import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [], // must always be an array
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
