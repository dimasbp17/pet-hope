import { Link } from 'react-router-dom';

interface CardMenuProps {
  icon: React.ElementType;
  title: string;
  // description: string;
  link: string;
}

const CardMenu: React.FC<CardMenuProps> = ({
  icon: Icon,
  title,
  // description,
  link,
}) => {
  return (
    <>
      <Link to={link}>
        <div className="flex flex-col items-center justify-center w-full p-5 text-white duration-300 bg-orange-600 shadow-lg rounded-xl">
          <div className="flex items-center justify-center text-orange-500 bg-white rounded-full size-20">
            <Icon className="text-4xl text-orange-500" />
          </div>
          <h1 className="mt-3 text-lg font-bold text-center">{title}</h1>
          {/* <h1 className="text-center">{description}</h1> */}
        </div>
      </Link>
    </>
  );
};

export default CardMenu;
