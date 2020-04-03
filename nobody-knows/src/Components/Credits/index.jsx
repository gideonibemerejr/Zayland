import React from 'react';
import { CreditsList } from '../index';

const Credits = () => {
  return (
    <div className='w-100 h-100'>
      <CreditsList />
      <footer className='white-80 fw5 flex items-center w-100 justify-center mt6 mb3'>
        ©{new Date().getFullYear()} The Nu Wave SOUND
      </footer>
    </div>
  );
};

export default Credits;
