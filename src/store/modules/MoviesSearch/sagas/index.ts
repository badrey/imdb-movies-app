import {call, cancel, fork, take} from 'redux-saga/effects';
import {MoviesSearchActions} from '../actions';
import {searchMoviesSaga} from './searchMovies.ts';
import {Task} from 'redux-saga';
import {wait} from 'rn-units';

const LIVE_DEBOUNCE_MS = 757;

let runningTask: Task | null = null;

function* watchSearchMovies() {
  while (true) {
    const action: ReturnType<
      typeof MoviesSearchActions.SEARCH_MOVIES.START.create
    > = yield take(MoviesSearchActions.SEARCH_MOVIES.START.type);
    if (runningTask) {
      yield cancel(runningTask);
    }
    runningTask = yield fork(function* () {
      try {
        yield call(wait, LIVE_DEBOUNCE_MS);
        yield call(searchMoviesSaga, action);
      } catch {
      } finally {
        runningTask = null;
      }
    });
  }
}

export const moviesSearchWatchers = [fork(watchSearchMovies)];
