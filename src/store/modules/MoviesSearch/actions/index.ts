import {MovieData} from '../../../../api/movies/types.ts';
import {createAction} from '../../../utils/actions/createAction.ts';

const SEARCH_MOVIES = createAction('SEARCH_MOVIES', {
  START: (payload: {searchValue: string}) => payload,
  COMPLETE: (payload: {results: MovieData[]}) => payload,
});

export const MoviesSearchActions = Object.freeze({
  SEARCH_MOVIES,
});
