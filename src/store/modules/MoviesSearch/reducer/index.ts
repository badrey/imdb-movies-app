import {produce} from 'immer';
import {MovieData, MovieDetailsData} from '../../../../api/movies/types.ts';
import {MoviesSearchActions} from '../actions';

export interface State {
  searchResult: MovieData[];
  movieDetails: Record<string, MovieDetailsData>;
  isLoading: boolean;
  isDetailsLoading: boolean;
}

type Actions = ReturnType<
  | typeof MoviesSearchActions.SEARCH_MOVIES.START.create
  | typeof MoviesSearchActions.SEARCH_MOVIES.COMPLETE.create
  | typeof MoviesSearchActions.FETCH_DETAILS.START.create
  | typeof MoviesSearchActions.FETCH_DETAILS.SUCCESS.create
>;

const INITIAL_STATE: State = {
  searchResult: [],
  movieDetails: {},
  isLoading: false,
  isDetailsLoading: false,
};

export function moviesSearchReducer(
  state = INITIAL_STATE,
  action: Actions,
): State {
  return produce(state, draft => {
    switch (action?.type) {
      case MoviesSearchActions.SEARCH_MOVIES.START.type: {
        draft.isLoading = true;
        draft.searchResult = [];
        break;
      }
      case MoviesSearchActions.SEARCH_MOVIES.COMPLETE.type: {
        draft.isLoading = false;
        draft.searchResult = action.payload.results;
        break;
      }
      case MoviesSearchActions.FETCH_DETAILS.START.type: {
        draft.isDetailsLoading = true;
        break;
      }
      case MoviesSearchActions.FETCH_DETAILS.SUCCESS.type: {
        draft.isDetailsLoading = false;
        draft.movieDetails[action.payload.id] = action.payload.result;
        break;
      }
    }
  });
}
