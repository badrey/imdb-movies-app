import {RootState} from '../../../rootReducer.ts';

export const moviesSearchResultSelector = (state: RootState) =>
  state.moviesSearch.searchResult;
export const moviesSearchIsLoadingSelector = (state: RootState) =>
  state.moviesSearch.isLoading;
