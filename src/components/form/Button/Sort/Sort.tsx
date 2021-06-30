import { charactersOrder } from 'utils/config';

type SortProps = {
  order: string;
  onAscClick: () => void;
  onDescClick: () => void;
};

const Sort = ({ order, onAscClick, onDescClick }: SortProps) => (
  <>
    <div
      className={`${
        order === charactersOrder.nameDesc && 'hidden'
      } h-6 w-6 cursor-pointer`}
      onClick={onDescClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Desc</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
    </div>
    <div
      className={`${
        order === charactersOrder.nameAsc && 'hidden'
      } h-6 w-6 cursor-pointer`}
      onClick={onAscClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Asc</title>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 328l144-144 144 144"
        />
      </svg>
    </div>
  </>
);

export default Sort;
