// actions.js
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchData = () => ({ type: FETCH_DATA });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, data });