import {call, put, SagaReturnType} from 'redux-saga/effects';
import {MoviesSearchActions} from '../actions';
import {Api} from '../../../../api';
import {Alert} from 'react-native';

type Action = ReturnType<typeof MoviesSearchActions.SEARCH_MOVIES.START.create>;

async function callSearchApi(searchValue: string) {
  if (searchValue) {
    return Api.movies.searchMovies(searchValue);
  }
  return Api.movies.getRandomMovies();
}

export function* searchMoviesSaga(action: Action) {
  const {searchValue} = action.payload;
  try {
    const results: SagaReturnType<typeof callSearchApi> = yield call(
      callSearchApi,
      searchValue,
    );
    yield put(MoviesSearchActions.SEARCH_MOVIES.COMPLETE.create({results}));
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again later', [
      {text: 'OK'},
    ]);
  }
}
