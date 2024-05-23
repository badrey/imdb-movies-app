import {MovieData} from './types.ts';

export const getRandomLetter = (): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

export const getRandomMovieFromList = (movies: MovieData[]): MovieData => {
  return movies[Math.floor(Math.random() * movies.length)];
};
