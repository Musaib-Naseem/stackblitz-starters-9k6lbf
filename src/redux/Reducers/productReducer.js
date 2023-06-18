const initialState = {
  products: [
    {
      id: 1,
      name: 'Musaib',
      category: 'Engineer',
    },
  ],
};

export const productReducer = (state = initialState, actions) => {
  console.log(actions.payload);

  switch (actions.type) {
    case 'All_PRODUCTS':
      return {
        ...state,
        products: actions.payload,
      };

    case 'fetch_Products':
      return {
        ...state,
        products: actions.payload,
      };

      break;

    default:
      return state;
  }
};

export const selectedReducer = (state = {}, actions) => {
  console.log(actions.payload)
  switch (actions.type) {
    case 'SELECTED_PRODUCT':
      return { ...state, ...actions.payload };

    case 'REMOVE_SELECTED_PRODUCT':
      return {};

    default:
      return state;
  }
};

export default productReducer;
