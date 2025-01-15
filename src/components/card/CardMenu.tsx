import { Link } from 'react-router-dom';

interface CardMenuProps {
  icon: React.ElementType;
  description: string;
  link: string;
}

const CardMenu: React.FC<CardMenuProps> = ({
  icon: Icon,
  description,
  link,
}) => {
  return (
    <>
      <Link to={link}>
        <div className="flex flex-col items-center justify-center w-full p-5 text-white bg-orange-600 rounded-lg shadow-lg">
          <div className="flex items-center justify-center text-orange-500 bg-white rounded-full size-20">
            <Icon className="text-4xl text-orange-500 animate-bounce" />
          </div>
          <h1 className="mt-5 font-semibold">{description}</h1>
        </div>
      </Link>
    </>
  );
};

export default CardMenu;
