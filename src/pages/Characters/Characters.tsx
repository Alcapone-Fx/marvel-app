import React, { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { getCharacters } from 'adapters';
import CharactersList from 'components/CharactersList';
import { Filter, Sort } from 'components/form/Button';
import Form from 'components/form/CharactersForm';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spinner';
import { charactersOrder, filterOptions as options } from 'utils/config';

const Characters: React.FC = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState(charactersOrder.nameAsc);
  const [filterOptions, setFilterOptions] = useState({
    filterBy: '',
    searchParam: '',
  });
  const [isFilterVisible, setFilterVisible] = useState(false);

  const getCharactersResolver = useCallback(
    (
      page: number,
      order: string,
      filterBy: string,
      searchParam: string
    ): Promise<CharactersResponse> =>
      getCharacters({ page, orderBy: order, filterBy, searchParam }),
    []
  );

  const { data, isLoading, isError, isPreviousData } =
    useQuery<CharactersResponse>(
      ['characters', page, order, filterOptions],
      () =>
        getCharactersResolver(
          page,
          order,
          filterOptions.filterBy,
          filterOptions.searchParam
        ),
      {
        keepPreviousData: true,
      }
    );

  const hasMore = useMemo(
    () => data?.offset + data?.limit < data?.total,
    [data?.offset, data?.limit, data?.total]
  );

  // Prefetch the next page!
  useEffect(() => {
    if (hasMore) {
      queryClient.prefetchQuery(['characters', page + 1], () =>
        getCharacters({ page: page + 1, orderBy: order })
      );
    }
  }, [data, page, hasMore, order, queryClient]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      search: HTMLInputElement;
      filterBy: HTMLInputElement;
    };

    setPage(0);
    setFilterOptions({
      filterBy: options[formElements.filterBy.value],
      searchParam: formElements.search.value,
    });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold mb-6">Marvel Universe Characters</p>
        <div className="flex">
          <Filter onClick={() => setFilterVisible((old) => !old)} />
          <div>
            <Sort
              order={order}
              onAscClick={() => {
                setPage(0);
                setOrder(charactersOrder.nameAsc);
              }}
              onDescClick={() => {
                setPage(0);
                setOrder(charactersOrder.nameDesc);
              }}
            />
          </div>
        </div>
      </div>
      <div className={`${isFilterVisible ? 'block' : 'hidden'}`}>
        <Form onSubmit={onSubmit} />
      </div>
      {isError ? (
        <div className="h-20 rounded-lg bg-red-400 flex justify-center items-center">
          <span className="text-2xl text-white">Unexpected Error!</span>
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center mt-24">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            <CharactersList results={data?.results} />
          </div>
          <div className="flex items-center justify-center my-8">
            <Pagination
              hasMore={hasMore}
              isPreviousData={isPreviousData}
              paginationState={{ currentPage: page, setCurrentPage: setPage }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Characters;
