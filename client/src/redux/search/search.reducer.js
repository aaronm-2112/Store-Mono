const INITIAL_STATE = {
  products: null,
  isFetching: false,
  errorMessage: undefined,
};

const searchReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return {
        ...currentState,
        isFetching: true,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...currentState,
        products: action.payload,
        isFetching: false,
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...currentState,
        errorMessage: action.payload,
      };
    default:
      return currentState;
  }
};

export default searchReducer;
