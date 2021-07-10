import axios from 'axios';
import md5 from 'md5';

import { URL } from 'utils/urls';

const publicKey = '59eb84cf657f1d8b60cee6d8a6d4a3c2';
const privateKey = '94a22e6a16f8e46243e6e826c43815c2a64d6f1e';

const getAuthConfig = () => {
  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);

  return { apikey: publicKey, ts, hash };
};

const marvelAPI = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
});

export const getCharacters = async ({
  orderBy,
  page,
  filterBy,
  searchParam,
}: getCharactersParams): Promise<CharactersResponse> => {
  const params = {
    ...getAuthConfig(),
    offset: page * 20,
    orderBy,
    [filterBy]: searchParam,
  };
  

  const {
    data: { data: marvelData },
  } = await marvelAPI(URL.characters, {
    params,
  });

  return marvelData;
};

export const getComics = async ({ page }: getComicsParams) => {
  const params = { offset: page * 20 };

  const {
    data: { data },
  } = await marvelAPI(URL.comics, { params });

  return data;
};
