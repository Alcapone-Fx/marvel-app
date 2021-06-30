import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../Button';
import RadioButton from '../Radio';

type CharactersFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const CharactersForm = ({ onSubmit }: CharactersFormProps) => {
  const [isSearchFieldDisabled, setSearchFieldDisabled] = useState(true);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    name === 'filterBy' && setSearchFieldDisabled(false);

    // TODO: Validate int value
    if (name === 'filterBy' && (value === 'comics' || value === 'stories')) {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center">
        <p className="text-lg mr-4">Filter characters by:</p>
        <RadioButton
          label="Name"
          name="filterBy"
          value="name"
          onChange={handleChange}
        />
        <RadioButton
          label="Comics"
          name="filterBy"
          value="comics"
          onChange={handleChange}
        />
        <RadioButton
          label="Stories"
          name="filterBy"
          value="stories"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center mt-2 mb-4">
        <div className="w-1/2">
          <input
            className={`w-full p-2 rounded-lg border-2 border-solid ${
              isSearchFieldDisabled
                ? 'border-gray-300 bg-white text-gray-300'
                : 'border-gray-400'
            }`}
            disabled={isSearchFieldDisabled}
            id="search"
            name="search"
            placeholder="Filter By"
            type="text"
          />
        </div>
        <div className="ml-4">
          <Button
            isDisabled={isSearchFieldDisabled}
            label="Search"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default CharactersForm;
