type CharactersResult = {
  comics: Object;
  description: string;
  events: Object;
  id: BigInt;
  modified: string;
  name: string;
  resourceURI: string;
  series: Object;
  stories: Object;
  thumbnail: { path: string; extension: string };
  urls: string[];
};

type CharactersResponse = {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: CharactersResult[];
};

type getComicsParams = {
  page: number;
};

type getCharactersParams = {
  filterBy?: string;
  orderBy: string;
  page: number;
  searchParam?: string;
};
