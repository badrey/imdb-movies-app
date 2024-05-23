import axios from 'axios';
import {MovieData, MovieDescription, QueryApiResponse} from './types.ts';
import {ApiError} from '../ApiError.ts';

const API_URL = 'https://search.imdbot.workers.dev';

const searchMovies = async (query: string): Promise<MovieData[]> => {
  console.log('searchMovies', {query});
  const response = await axios.get<QueryApiResponse>(`${API_URL}/?q=${query}`);
  console.log(response.data);
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

const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/id/${id}`);
  return response.data;
};

export const movies = {
  searchMovies,
  getMovieDetails,
};
