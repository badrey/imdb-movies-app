import {RootState} from '../../../rootReducer.ts';

export const moviesSearchResultSelector = (state: RootState) =>
  state.moviesSearch.searchResult;
export const moviesSearchIsLoadingSelector = (state: RootState) =>
  state.moviesSearch.isLoading;
export const moviesDetailsSelector = (id: string) => (state: RootState) =>
  state.moviesSearch.movieDetails[id];
export const moviesDetailsLoadingSelector = (state: RootState) =>
  state.moviesSearch.isDetailsLoading;
