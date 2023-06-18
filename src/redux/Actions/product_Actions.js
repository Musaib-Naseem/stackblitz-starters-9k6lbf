import { useParams } from 'react-router-dom';

export const Show_All_Products = (products) => {
  // console.log(products);
  return {
    type: 'All_PRODUCTS',
    payload: products,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch) => {
    const respon = await fetch('https://fakestoreapi.com/products');

    var data = await respon.json();
    console.log(data);
    dispatch({ type: 'fetch_Products', payload: data });
  };
};

export const SelectApi = (id) => {
  return async (dispatch) => {
    const respon2 = await fetch(`https://fakestoreapi.com/products/${id}`);

    var data2 = await respon2.json();

    dispatch({ type: 'SELECTED_PRODUCT', payload: data2 });
  };
};

export const Show_Selected_Products = (product) => {
  // console.log(product);

  return {
    type: 'SELECTED_PRODUCT',
    payload: product,
  };
};

export const Remove_Selected_Products = () => {
  return {
    type: 'REMOVE_SELECTED_PRODUCT',
  };
};
