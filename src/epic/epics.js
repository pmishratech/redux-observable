// epics.js
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import axiosInstance from '../axiosInterceptor'; // Correct import path
import { FETCH_DATA, fetchDataSuccess } from '../actions/actions';

const fetchDataEpic = (action$, state$) =>
  action$.pipe(
    ofType(FETCH_DATA),
    mergeMap(() =>
      axiosInstance.get('/data')
        .then((response) => {
          const data = response.data;
          return fetchDataSuccess(data);
        })
        .catch((error) => {
         console.log(error)
        })
    )
  );

export default fetchDataEpic;
