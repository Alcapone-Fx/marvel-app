export type Result = {
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

export type Response = {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: Result[];
};
