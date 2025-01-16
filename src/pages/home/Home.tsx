import image_jumbotron from '../../../public/assets/images/image-jumbotron.png';
import CardMenu from '../../components/card/CardMenu';
import { menuJumbotron } from '../../data/constant/menuJumbotron';
import { LuBird } from 'react-icons/lu';
import { FaCat, FaDog } from 'react-icons/fa';
import { IoHomeSharp, IoPawSharp } from 'react-icons/io5';

const Home = () => {
  const iconMap: Record<string, React.ElementType> = {
    FaCat: FaCat,
    FaDog: FaDog,
    LuBird: LuBird,
    IoPawSharp: IoPawSharp,
    IoHomeSharp: IoHomeSharp,
  };
  return (
    <>
      <div className="w-full font-poppins ">
        <section>
          <div className="grid items-center justify-center min-h-screen grid-cols-12 px-4 lg:px-20 from-primary to-[#08C2FF] bg-gradient-to-r">
            <div className="col-span-6 text-white">
              <h1 className="text-5xl font-bold leading-[60px]">
                <span className="text-orange-500">Adopt</span> your pet,
                <br /> to be your best friend <br /> at all time
              </h1>
              <h3>Find pets and adopt them to be your loyal friends</h3>
            </div>
            <div className="col-span-6">
              <img
                src={image_jumbotron}
                alt="Image Jumbotron"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center h-screen px-4 lg:px-20">
          <h1 className="mb-10 text-5xl font-bold text-center">
            Find your new{' '}
            <span className="p-2 text-white rounded bg-primary">
              best friend
            </span>
          </h1>
          <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-2">
            {menuJumbotron.map((menu) => {
              const IconComponent = iconMap[menu.icon];
              return (
                <CardMenu
                  key={menu.id}
                  icon={IconComponent}
                  title={menu.title}
                  description={menu.description}
                  link={menu.link}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
