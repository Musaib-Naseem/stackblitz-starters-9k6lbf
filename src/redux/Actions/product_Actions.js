export const Show_All_Products = (products) => {
  return {
    type: 'All_PRODUCTS',
    payload: products,
  };
};

export const Show_Selected_Products = (product) => {
  return {
    type: 'SELECTED_PRODUCT',
    payload: product,
  };
};
