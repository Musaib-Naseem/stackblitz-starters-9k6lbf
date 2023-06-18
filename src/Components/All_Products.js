import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Show_All_Products,
  fetchAllProducts,
} from '../redux/Actions/product_Actions';
import { Link } from 'react-router-dom';

const All_Products = () => {
  const product = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  // console.log(product);

  const { id, name, category } = product;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      <h1>All Products Are Here</h1>
      {product.map((data) => {
        const { id, image, category, price } = data;

        return (
          <Link to={`/product/${id}`}>
            <div key={id} style={{ border: '1px solid #000' }}>
              <p> {id}</p>
              <img src={image} style={{ width: '200px' }} />
              <p> {category} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default All_Products;
