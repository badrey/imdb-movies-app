import {MoviesSearchActions} from '../actions';
import {searchMoviesSaga} from './searchMovies.ts';
import {takeLatest} from '@redux-saga/core/effects';

export const moviesSearchWatchers = [
  takeLatest(MoviesSearchActions.SEARCH_MOVIES.START.type, searchMoviesSaga),
];
