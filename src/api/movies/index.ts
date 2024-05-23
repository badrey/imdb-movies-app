import axios from 'axios';
import {MovieData, MovieDescription, QueryApiResponse} from './types.ts';
import {ApiError} from '../ApiError.ts';
import {getRandomLetter, getRandomMovieFromList} from './utils.ts';

const API_URL = 'https://search.imdbot.workers.dev';

const searchMovies = async (query: string): Promise<MovieData[]> => {
  const searchValue = query.toLowerCase();
  console.log('searchMovies', {searchValue});
  const response = await axios.get<QueryApiResponse>(
    `${API_URL}/?q=${searchValue}`,
  );
  if (!response.data.ok) {
    throw new ApiError(
      'Error during movies search call',
      response.data.error_code,
    );
  }
  return response.data.description.map((item: MovieDescription) => ({
    id: item['#IMDB_ID'],
    title: item['#TITLE'],
    aka: item['#AKA'],
    poster: item['#IMG_POSTER']
      ? {
          url: item['#IMG_POSTER'],
          width: item.photo_width,
          height: item.photo_height,
        }
      : null,
  }));
};

const getRandomMovies = async (
  moviesNumber: number = 10,
): Promise<MovieData[]> => {
  console.log('getRandomMovies');
  const randomLetters = Array.from({length: moviesNumber}, getRandomLetter);
  console.log({randomLetters});
  const movieResults = await Promise.all(
    randomLetters.map(letter => searchMovies(letter)),
  );

  return movieResults.map(movies => getRandomMovieFromList(movies));
};

const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/id/${id}`);
  return response.data;
};

export const movies = {
  searchMovies,
  getRandomMovies,
  getMovieDetails,
};
