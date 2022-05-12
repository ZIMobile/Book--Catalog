import * as AT from 'store/action-types';
import {API_URL} from '@env';

export const fetchBooks = (page = 1, limit = 10, search = '', isNewSearch) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `${API_URL}/books?page=${page}&limit=${limit}&search=${search}`,
      );
      const {paginatedData, total} = await response.json();
      dispatch({
        type: AT.FETCH_BOOKS_SUCCESS,
        payload: {books: paginatedData, totalBooks: total, isNewSearch},
      });
    } catch (err) {
      dispatch({type: AT.FETCH_BOOKS_FAILURE, payload: err});
    }
  };
};
