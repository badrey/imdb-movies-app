export type MovieDescription = {
  '#TITLE': string; // "Mission: Impossible"
  '#YEAR'?: number; // 1996
  '#IMDB_ID': string; // "tt0117060"
  '#RANK': number; // 621
  '#ACTORS'?: string; // "Tom Cruise, Jon Voight"
  '#AKA': string; // "Mission: Impossible (1996) ",
  '#IMDB_URL': string; // "https://imdb.com/title/tt0117060"
  '#IMDB_IV': string; // "https://html.imdbot.workers.dev/tt0117060"
  '#IMG_POSTER'?: string; // "https://m.media-amazon.com/images/M/MV5BOTFhMWY3ZTctNTJlOC00Y2UwLThmOGUtMWU4NDI1Yzg4ODRkXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg"
  photo_width?: number; // 1525
  photo_height?: number; // 2265
};

export type QueryApiResponse = {
  ok: boolean;
  description: MovieDescription[];
  error_code: number;
};

export type MovieData = {
  id: string;
  title: string;
  aka: string;
  poster: {
    url: string;
    width?: number;
    height?: number;
  } | null;
};
