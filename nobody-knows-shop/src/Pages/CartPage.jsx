import React from 'react';
import { Cart } from '../Components';

const CartPage = (props) => {
  return (
    <div className='w-100 absolute vh-100 bg-white z-2'>
      <Cart {...props} />
    </div>
  );
};

export default CartPage;
