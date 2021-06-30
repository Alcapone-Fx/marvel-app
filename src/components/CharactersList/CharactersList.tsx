import { Result } from 'pages/Characters/types';
import Card from 'components/Card';

type CharactersListProps = {
  results: Result[];
};

const CharactersList = ({ results }: CharactersListProps) => {
  return (
    <>
      {results?.map(({ id, name, thumbnail }) => (
        <Card
          key={id.toString()}
          imageUrl={`${thumbnail?.path}.${thumbnail?.extension}`}
          title={name}
        />
      ))}
    </>
  );
};

export default CharactersList;
