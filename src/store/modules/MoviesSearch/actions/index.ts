import {MovieData, MovieDetailsData} from '../../../../api/movies/types.ts';
import {createAction} from '../../../utils/actions/createAction.ts';

const SEARCH_MOVIES = createAction('SEARCH_MOVIES', {
  START: (payload: {searchValue: string}) => payload,
  COMPLETE: (payload: {results: MovieData[]}) => payload,
});

const FETCH_DETAILS = createAction('FETCH_DETAILS', {
  START: (payload: {id: string}) => payload,
  SUCCESS: (payload: {id: string; result: MovieDetailsData | null}) => payload,
});

export const MoviesSearchActions = Object.freeze({
  SEARCH_MOVIES,
  FETCH_DETAILS,
});
