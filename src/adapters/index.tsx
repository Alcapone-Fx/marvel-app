import axios from 'axios';
import md5 from 'md5';

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

type getCharactersParams = {
  queryKey: [string, { search?: string }];
};

export const getCharacters = async (params: getCharactersParams) => {
  const { data: { data: marvelData} } = await marvelAPI('/characters', {
    params: { ...getAuthConfig() },
  });

  return marvelData;
};
