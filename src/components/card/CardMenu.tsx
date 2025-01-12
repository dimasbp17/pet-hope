interface CardMenuProps {
  icon: React.ReactNode;
  description: string;
}

const CardMenu: React.FC<CardMenuProps> = ({ icon, description }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-5 text-white bg-orange-600 rounded-lg shadow-lg">
        <div className="flex items-center justify-center text-orange-500 bg-white rounded-full size-20">
          {icon}
        </div>
        <h1 className="mt-5">{description}</h1>
      </div>
    </>
  );
};

export default CardMenu;
