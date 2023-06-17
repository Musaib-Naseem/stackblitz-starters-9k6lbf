export const Show_All_Products = (products) => {

  console.log(products);
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
