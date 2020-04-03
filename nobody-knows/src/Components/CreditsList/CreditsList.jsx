import React from 'react';
import { getFullAlbumCredits, getAlbumCredits } from '../../data';
import { AlbumCredit, Credit } from '../index';

const credits = getFullAlbumCredits();
const albumCredit = getAlbumCredits();

const CreditsList = () => {
  return (
    <div className='ma4'>
      <AlbumCredit />
      {credits.map(credit => (
        <Credit {...credit} key={credit.trackNo} end={albumCredit.end} />
      ))}
    </div>
  );
};

export default CreditsList;
