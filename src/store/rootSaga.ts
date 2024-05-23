import {SagaIterator} from 'redux-saga';
import {all, call, spawn} from 'redux-saga/effects';
import {moviesSearchWatchers} from './modules/MoviesSearch/sagas';

const watchers = [...moviesSearchWatchers];

export function* rootSaga(): SagaIterator {
  yield all([
    ...watchers.map(watcher => {
      return spawn(function* () {
        while (true) {
          try {
            yield call(function* () {
              yield watcher;
            });
            break;
          } catch (error) {
            console.error(error);
          }
        }
      });
    }),
  ]);
}
