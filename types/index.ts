export type filmType = {
  ageRating: number | null;
  alternativeName: string | null;
  backdrop: {
    previewUrl: string | null;
    url: string | null;
  };
  budget?: {
    currency: string;
    value: number;
  };
  countries: {
    name: string | null;
  }[];
  deletedAt: string | null;
  description: string | null;
  distributors?: {
    distributor: string | null;
    distributorRelease: string | null;
  };
  enName: string | null;
  externalId: {
    imdb: string | null;
    kpHD: string | null;
    tmdb: number | null;
  };
  facts?: {
    spoiler: boolean;
    type: "FACT";
    value: string;
  }[];
  fees?: {
    russia: {
      currency: string;
      value: number;
    };
    usa: {
      currency: string;
      value: number;
    };
    world: {
      currency: string;
      value: number;
    };
  };
  genres: Genre[] | null;
  id: number;
  images?: { framesCount: number } | null;
  imagesInfo?: { framesCount: number } | null;
  isSeries: boolean;
  lists: string[] | null;
  logo?: {
    url: string | null;
  };
  movieLength: number;
  name: string | null;
  names?: { name: string }[];
  networks: string | null;
  persons?:
    | {
        description: string;
        enName: string;
        enProfession: string;
        id: number;
        name: string;
        photo: string;
        profession: string;
      }[]
    | null;
  poster: {
    previewUrl: string | null;
    url: string | null;
  };
  premiere?: {
    bluray: string | null;
    cinema: string | null;
    digital: string | null;
    dvd: string | null;
    russia: string | null;
    world: string | null;
  };
  productionCompanies?: {
    name: string | null;
    previewUrl: string | null;
    url: string | null;
  };
  rating: {
    await: number | null;
    filmCritics: number | null;
    imdb: number | null;
    kp: number | null;
    russianFilmCritics: number | null;
  };
  ratingMpaa?: string;
  seasonsInfo?: [];
  sequelsAndPrequels?:
    | {
        alternativeName: string;
        enName: string | null;
        id: number | null;
        name: string | null;
        poster: {
          previewUrl: string | null;
          url: string | null;
        };
        rating: {
          await: number | null;
          filmCritics: number | null;
          imdb: number | null;
          kp: number | null;
          russianFilmCritics: number | null;
        };
        type: MediaType;
        year: number;
      }[]
    | null;
  seriesLength: null | number;
  shortDescription?: string | null;
  similarMovies?: {
    alternativeName: string;
    enName: string | null;
    id: number | null;
    name: string | null;
    poster: {
      previewUrl: string | null;
      url: string | null;
    };
    type: MediaType;
  }[];
  slogan?: string | null;
  spokenLanguages?: { name: string | null; nameEn: string | null }[] | null;
  status?: string | null;
  technology?: {
    has3D: boolean | null;
    hasImax: boolean | null;
  };
  ticketsOnSale?: boolean | null;
  top10: number | null;
  top250: number | null;
  totalSeriesLength: number | null;
  type: MediaType;
  typeNumber: 1 | 2 | 3 | 4 | 5;
  updatedAt: string | null;
  videos?: {
    trailers: {
      name: string | null;
      site: string | null;
      type: string | null;
      url: string | null;
    }[];
  } | null;
  votes: {
    await: number | null;
    filmCritics: number | null;
    imdb: number | null;
    kp: number | null;
    russianFilmCritics: number | null;
  };
  watchability?: {
    items: [] | any;
  };
  year: number | null;
};

export interface ParamsType {}
export type MediaType =
  | "animated-series"
  | "anime"
  | "cartoon"
  | "movie"
  | "tv-series";
export type Genre =
  | "аниме"
  | "биография"
  | "боевик"
  | "вестерн"
  | "военный"
  | "детектив"
  | "детский"
  | "для взрослых"
  | "документальный"
  | "драма"
  | "игра"
  | "история"
  | "комедия"
  | "концерт"
  | "короткометражка"
  | "криминал"
  | "мелодрама"
  | "музыка"
  | "мультфильм"
  | "мюзикл"
  | "новости"
  | "приключения"
  | "реальное ТВ"
  | "семейный"
  | "спорт"
  | "ток-шоу"
  | "триллер"
  | "ужасы"
  | "фантастика"
  | "фильм-нуар"
  | "фэнтези"
  | "церемония";
