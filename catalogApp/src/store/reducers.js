import * as AT from '../store/action-types';
import Strings from '../constants/Strings';

const initialCatalogState = {
  books: [],
  totalBooks: 0,
  isLoading: false,
  isLoadingMore: false,
  error: null,
  searchValue: Strings.Empty,
};
const initialAuthState = {
  isLoggedIn: false,
  isLoading: false,
};

export const catalogReducer = (state = initialCatalogState, action) => {
  switch (action.type) {
    case AT.FETCHING_BOOKS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AT.FETCHING_MORE_BOOKS:
      return {
        ...state,
        isLoadingMore: true,
        error: null,
      };
    case AT.FETCH_BOOKS_SUCCESS:
      const {books, totalBooks, isNewSearch} = action.payload;
      return {
        ...state,
        books: isNewSearch ? books : [...state.books, ...books],
        totalBooks,
        isLoadingMore: false,
        isLoading: false,
      };
    case AT.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoadingMore: false,
        isLoading: false,
      };
    case AT.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AT.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case AT.SET_IS_LOGGED_IN_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
