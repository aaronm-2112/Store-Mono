import axios from "axios";

export const fetchProductsStart = () => ({
  type: "FETCH_PRODUCTS_START",
});

export const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: "FETCH_PRODUCTS_FAILURE",
  payload: errorMessage,
});

export const fetchProductsStartAsync = () => {
  return async (dispatch) => {
    // dispatch the action that tells the Search page we are fetching products (so it can load the spinner)
    dispatch(fetchProductsStart());
    try {
      const products = await axios.get("http://localhost:3007/api/v1/products");

      console.log(products.data);

      dispatch(fetchProductsSuccess(products.data));
    } catch (e) {
      dispatch(fetchProductsFailure(e.message));
    }
  };
};
