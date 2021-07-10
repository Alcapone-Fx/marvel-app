import React from 'react';

import Card from 'components/Card';

interface CharactersListProps {
  results: CharactersResult[];
}

const CharactersList: React.FC<CharactersListProps> = ({ results }) => {
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
