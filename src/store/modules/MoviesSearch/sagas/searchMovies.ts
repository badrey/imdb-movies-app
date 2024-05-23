import {call, put, SagaReturnType} from 'redux-saga/effects';
import {MoviesSearchActions} from '../actions';
import {Api} from '../../../../api';
import {Alert} from 'react-native';

type Action = ReturnType<typeof MoviesSearchActions.SEARCH_MOVIES.START.create>;

export function* searchMoviesSaga(action: Action) {
  const {searchValue} = action.payload;
  try {
    console.log({searchValue});
    const results: SagaReturnType<typeof Api.movies.searchMovies> = yield call(
      Api.movies.searchMovies,
      searchValue,
    );
    console.log({results});
    yield put(MoviesSearchActions.SEARCH_MOVIES.COMPLETE.create({results}));
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again later', [
      {text: 'OK'},
    ]);
  }
}
