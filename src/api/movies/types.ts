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

export type DetailsApiResponse = {
  short: {
    description: string;
    keywords: string; // "post apocalypse,based on video game,vault,future,nuclear"
    review: {
      author: {
        name: string; // "Amthermandes"
      };
      dateCreated: string; // "2024-04-14",
      name: string; // "I am in love with this show"
      reviewBody: string;
      reviewRating: {
        bestRating: number; // 10;
        ratingValue: number; // 9;
      };
    };
  };
  main: {
    cast: {
      edges: {
        node: {
          name: {
            nameText: {
              text: string; // "Ella Purnell"
            };
            primaryImage: {
              url: string; // "https://m.media-amazon.com/images/M/MV5BN2UxMTFkNGYtNDUyNy00ZGUzLWE1MzMtM2QxZGRlY2I0MmUyXkEyXkFqcGdeQXVyMTI2Nzk2MjQ1._V1_.jpg",
              width: number; // 2000,
              height: number; // 1250,
            };
          };
          characters: {
            name: string; // "Lucy MacLean"
          }[];
        };
      }[];
    };
  };
};

export type MovieReview = {
  author: string;
  dateCreated: number | null;
  title: string;
  description: string;
  rating: {
    bestRating: number; // 10;
    ratingValue: number; // 9;
  } | null;
};

export type MovieCastData = {
  actorName: string;
  characterName: string;
  primaryImage: {
    url: string; // "https://m.media-amazon.com/images/M/MV5BZjEzMTUwYzEtZWY2MC00MzI4LWI5OWItNmRhMzY3ZmRmZTUwXkEyXkFqcGdeQXVyNTkzMjUwNTE@._V1_.jpg",
    width: number; // 832,
    height: number; // 873,
  } | null;
};

export type MovieDetailsData = {
  description: string;
  keywords: string[];
  featuredReview: MovieReview | null;
  cast: MovieCastData[];
};
