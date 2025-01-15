import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="top-0 w-full px-4 py-5 bg-[#000957]  text-white font-poppins lg:px-20 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            to={'/'}
            className="text-2xl font-bold"
          >
            Pet Hope
          </Link>
          <div className="flex">
            <li>kkk</li>
            <li>kkk</li>
            <li>kkk</li>
            <li>kkk</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
