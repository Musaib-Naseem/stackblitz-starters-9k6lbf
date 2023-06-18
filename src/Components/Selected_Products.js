import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Show_Selected_Products,
  Remove_Selected_Products,
  SelectApi,
} from '../redux/Actions/product_Actions';

const Selected_Products = () => {
  const { productIdd } = useParams();

  const dispatch = useDispatch();

  const data2 = useSelector((data) => data.selproducts);

  const { id, image, category } = data2;

  useEffect(() => {
    dispatch(SelectApi(productIdd));
  }, [productIdd]);

  return (
    <div>
      {Object.keys(data2).length === 0 ? (
        <div> ...Loading </div>
      ) : (
        <div>
          <div key={id} style={{ border: '1px solid #000' }}>
            <p> {id}</p>
            <img src={image} style={{ width: '200px' }} />
            <p> {category} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selected_Products;
