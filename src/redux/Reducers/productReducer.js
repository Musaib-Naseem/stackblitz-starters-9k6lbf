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

  console.log(action.payload)
  switch (action.type) {
    case 'All_PRODUCTS':
      return {
        ...state,products:action.payload
      };

      break;

    default:
      return state;
  }
};

export default productReducer;
