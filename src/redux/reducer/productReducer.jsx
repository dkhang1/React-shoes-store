import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  arrProduct: [],
  detailProduct: {},
  arrCart: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.arrProduct = action.payload;
    },
    getDetailProduct: (state, action) => {
      state.detailProduct = action.payload;
    },
  },
});

export const { getProduct, getDetailProduct } = productReducer.actions;

export default productReducer.reducer;

/// API
export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      console.log(result.data.content);
      dispatch(getProduct(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDetailProductApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?=${id}`,
        method: "GET",
      });
      dispatch(getDetailProduct(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
