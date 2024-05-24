import axios from 'axios';
import {
  DetailsApiResponse,
  MovieData,
  MovieDescription,
  MovieDetailsData,
  QueryApiResponse,
} from './types';
import {ApiError} from '../ApiError';
import {getRandomLetter, getRandomMovieFromList, normaliseText} from './utils';

const API_URL = 'https://search.imdbot.workers.dev';

const searchMovies = async (query: string): Promise<MovieData[]> => {
  const searchValue = query.toLowerCase();
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
  const randomLetters = Array.from({length: moviesNumber}, getRandomLetter);
  const movieResults = await Promise.all(
    randomLetters.map(letter => searchMovies(letter)),
  );

  const selectedIds = new Set<string>();

  return movieResults
    .map(movies => {
      const movie = getRandomMovieFromList(movies, selectedIds);
      if (movie) {
        selectedIds.add(movie.id);
      }
      return movie;
    })
    .filter(Boolean) as MovieData[];
};

const getMovieDetails = async (
  id: string,
): Promise<MovieDetailsData | null> => {
  const response = await axios.get<DetailsApiResponse>(`${API_URL}/?tt=${id}`);
  const details = response.data;
  if (!details) {
    return null;
  }
  return {
    description: normaliseText(details.short?.description ?? ''),
    keywords:
      details.short?.keywords?.split(',').filter(Boolean).map(normaliseText) ??
      [],
    featuredReview: details.short?.review?.reviewRating
      ? {
          author: normaliseText(details.short?.review?.author?.name ?? ''),
          dateCreated: details.short?.review?.dateCreated
            ? new Date(details.short?.review?.dateCreated).getTime()
            : null,
          title: normaliseText(details.short?.review?.name ?? ''),
          description: normaliseText(details.short?.review?.reviewBody ?? ''),
          rating: details.short.review.reviewRating,
        }
      : null,
    cast: details.main.cast.edges
      .map(edge => ({
        actorName: normaliseText(edge?.node?.name?.nameText?.text ?? ''),
        characterName: normaliseText(edge?.node?.characters?.[0]?.name ?? ''),
        primaryImage: edge?.node?.name?.primaryImage
          ? edge?.node?.name?.primaryImage
          : null,
      }))
      .filter(cast => !!cast.actorName),
  };
};

export const movies = {
  searchMovies,
  getRandomMovies,
  getMovieDetails,
};
