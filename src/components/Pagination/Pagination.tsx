import Button from 'components/form/Button';
import { scrollToTop } from 'utils';

interface PaginationProps {
  hasMore: boolean;
  isPreviousData: boolean;
  paginationState: {
    currentPage: number;
    setCurrentPage: (
      newPage: number | ((previousPage: number) => number)
    ) => void;
  };
}

const Pagination: React.FC<PaginationProps> = ({
  hasMore,
  isPreviousData,
  paginationState: { currentPage, setCurrentPage },
}) => (
  <>
    <Button
      isDisabled={currentPage === 0}
      label="Previous Page"
      onClick={() => {
        setCurrentPage((previousPage: number) => Math.max(previousPage - 1, 0));
        scrollToTop();
      }}
    />
    <Button
      isDisabled={isPreviousData || !hasMore}
      label="Next Page"
      onClick={() => {
        setCurrentPage((previousPage) =>
          hasMore ? previousPage + 1 : previousPage
        );
        scrollToTop();
      }}
    />
  </>
);

export default Pagination;
