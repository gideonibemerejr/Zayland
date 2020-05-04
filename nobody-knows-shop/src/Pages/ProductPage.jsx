import React from 'react';
import { ProductDetail } from '../Components';

const ProductPage = (props) => {
  return (
    <div className='w-100 relative mt5-l'>
      <ProductDetail {...props} />
    </div>
  );
};

export default ProductPage;
