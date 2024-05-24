import {MovieData} from './types';

export const getRandomLetter = (): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

export const getRandomMovieFromList = (
  movies: MovieData[],
  selectedIds: Set<string>,
): MovieData | null => {
  const availableMovies = movies.filter(movie => !selectedIds.has(movie.id));
  if (availableMovies.length === 0) {
    return null;
  }
  return availableMovies[Math.floor(Math.random() * availableMovies.length)];
};

const SYMBOLS_MAPPING: {[key: string]: string} = {
  '&quot;': '"',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
  '&apos;': "'",
};

export function normaliseText(text: string): string {
  return text.replace(
    /&quot;|&amp;|&lt;|&gt;|&nbsp;|&apos;/g,
    match => SYMBOLS_MAPPING[match],
  );
}
