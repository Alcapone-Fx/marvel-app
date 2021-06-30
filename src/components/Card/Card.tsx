type CardProps = {
  imageUrl: string;
  title: string;
};

const Card = ({ imageUrl, title }: CardProps) => (
  <div className="w-48 shadow-lg">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="w-full rounded-t-lg overflow-hidden h-56 bg-cover bg-no-repeat bg-center"
    />
    <div className="w-full flex flex-nowrap justify-center items-center h-12 p-3">
      <span className="truncate">{title}</span>
    </div>
  </div>
);

export default Card;
