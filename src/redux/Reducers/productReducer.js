const initialState = {
  products: [
    {
      id: 1,
      name: 'Musaib',
      category: 'Engineer',
    },
  ],
};


export const productReducer = (state = initialState, action) => {

  console.log(state)
  switch (action.type) {
    case 'All_PRODUCTS':
      return {
        ...state,
      };

      break;

    default:
      return state;
  }
};

export default productReducer;
