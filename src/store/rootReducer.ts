import {combineReducers} from 'redux';
import {moviesSearchReducer} from './modules/MoviesSearch/reducer';

export const rootReducer = combineReducers({
  moviesSearch: moviesSearchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
