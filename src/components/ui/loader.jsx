import React from 'react';
import './loading.scss'
import { useSelector } from 'react-redux';

let Loader = () => {
  const Status = useSelector(state => state.status.postItems);
  return (
    <>
      {Status === 'requested' && <div className='loading'></div>}
    </>
  );
}

export default Loader;