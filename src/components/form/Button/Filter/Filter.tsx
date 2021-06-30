type FilterProps = {
  onClick: () => void;
};

const Filter = ({ onClick }: FilterProps) => (
  <div className="h-6 w-6 cursor-pointer mr-4" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M32 144h448M112 256h288M208 368h96"
      />
    </svg>
  </div>
);

export default Filter;
