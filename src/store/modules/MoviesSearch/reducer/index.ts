import {produce} from 'immer';
import {MovieData} from '../../../../api/movies/types.ts';
import {MoviesSearchActions} from '../actions';

export interface State {
  searchResult: MovieData[];
  isLoading: boolean;
}

type Actions = ReturnType<
  | typeof MoviesSearchActions.SEARCH_MOVIES.START.create
  | typeof MoviesSearchActions.SEARCH_MOVIES.COMPLETE.create
>;

const INITIAL_STATE: State = {
  searchResult: [],
  isLoading: false,
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
    }
  });
}
