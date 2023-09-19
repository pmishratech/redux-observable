// Component.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/actions';

const Component = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataModule.data);
  const loading = useSelector(state => state.dataModule.loading);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={handleFetchData}>Fetch Data</button>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Component;