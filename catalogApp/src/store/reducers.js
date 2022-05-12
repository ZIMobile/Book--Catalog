import * as AT from 'store/action-types';

const initialCatalogState = {
  books: [],
  totalBooks: 0,
  isLoading: false,
  isLoadingMore: false,
  error: null,
  searchValue: '',
};

export const catalogReducer = (state = initialCatalogState, action) => {
  const {type, payload} = action;
  console.log('ACTION: ', type, 'PAYLOAD: ', JSON.stringify(payload));

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
