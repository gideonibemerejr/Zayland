import React from 'react';
import { Cart } from '../Components';

const CartPage = (props) => {
  return (
    <div className='w-100'>
      <Cart {...props} />
    </div>
  );
};

export default CartPage;
