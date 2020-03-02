import React from 'react';
import './loading.scss'
import { useSelector } from 'react-redux';

let Loader = () => {
  const statusItems = useSelector(state => state.status);
  return (
    <>
      {Object.values(statusItems).includes('requested') && <div className='loading'></div>}
    </>
  );
}

export default Loader;