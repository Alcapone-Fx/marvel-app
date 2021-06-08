import { useQuery } from 'react-query';

import { getCharacters } from 'adapters';
import Spinner from 'components/Spinner';

type Result = {
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

type Response = {
  count: number;
  limit: number;
  offset: number;
  results: Result[];
};

const Characters = () => {
  const { data, isLoading, isError } = useQuery<Response>(
    ['characters'],
    getCharacters
  );
  
  return (
    <div className="w-2/3 mx-auto p-4">
      <p className="text-4xl font-bold mb-6">Marvel Universe Characters</p>
      {isError ? (
        <div className="h-20 rounded-lg bg-red-400 flex justify-center items-center">
          <span className="text-2xl text-white">Unexpected Error!</span>
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center mt-24">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          {data?.results?.map(({ id, name, thumbnail }) => (
            <div key={id.toString()} className="w-48 shadow-lg">
              <div
                style={{
                  backgroundImage: `url(${thumbnail?.path}.${thumbnail?.extension})`,
                }}
                className="w-full rounded-t-lg overflow-hidden h-56 bg-cover bg-no-repeat bg-center"
              />
              <div className="w-full flex flex-nowrap justify-center items-center h-12 p-3">
                <span className="truncate">{name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
