import {call, put, SagaReturnType} from 'redux-saga/effects';
import {MoviesSearchActions} from '../actions';
import {Api} from '../../../../api';
import {Alert} from 'react-native';

type Action = ReturnType<typeof MoviesSearchActions.FETCH_DETAILS.START.create>;

export function* fetchMovieDetailsSaga(action: Action) {
  const {id} = action.payload;
  try {
    const result: SagaReturnType<typeof Api.movies.getMovieDetails> =
      yield call(Api.movies.getMovieDetails, id);
    yield put(MoviesSearchActions.FETCH_DETAILS.SUCCESS.create({result, id}));
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again later', [
      {text: 'OK'},
    ]);
  }
}
