import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="w-full px-4 py-5 text-white font-poppins bg-primary lg:px-20 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            to={'/'}
            className="text-xl font-bold"
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
