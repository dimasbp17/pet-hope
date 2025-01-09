import image_jumbotron from '../../../public/assets/images/image-jumbotron.png';
import CardMenu from '../../components/card/CardMenu';

const Home = () => {
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
        <section className="grid grid-cols-4 px-4 mt-20 lg:px-20">
          <CardMenu />
        </section>
      </div>
    </>
  );
};

export default Home;
