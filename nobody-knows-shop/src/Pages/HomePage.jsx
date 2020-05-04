import React from 'react';
import { ProductsList } from '../Components';

const HomePage = (props) => {
  return (
    <div className='w-100 relative mt4'>
      <ProductsList {...props} />
    </div>
  );
};

export default HomePage;
