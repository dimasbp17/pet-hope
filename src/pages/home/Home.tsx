import image_jumbotron from '../../../public/assets/images/image-jumbotron.png';
import CardMenu from '../../components/card/CardMenu';
import { menuJumbotron } from '../../data/constant/menuJumbotron';
import { LuBird } from 'react-icons/lu';
import { FaCat, FaDog } from 'react-icons/fa';
import { IoPawSharp } from 'react-icons/io5';

const Home = () => {
  const iconMap: Record<string, React.ElementType> = {
    FaCat: FaCat,
    FaDog: FaDog,
    LuBird: LuBird,
    IoPawSharp: IoPawSharp,
  };
  return (
    <>
      <div className="w-full font-poppins ">
        <section>
          <div className="grid items-center justify-center min-h-screen grid-cols-12 px-4 lg:px-20 bg-background">
            <div className="col-span-6">
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
        <section className="px-4 mt-10 lg:px-20">
          <h1 className="mb-10 text-3xl font-bold text-center">
            Temukan hewan peliharaan dan jadi teman anda
          </h1>
          <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
            {menuJumbotron.map((menu) => {
              const IconComponent = iconMap[menu.icon];
              return (
                <CardMenu
                  key={menu.id}
                  icon={IconComponent}
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
