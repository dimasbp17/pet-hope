import Navbar from '../../components/Navbar';
import image_jumbotron from '../../../public/assets/images/image-jumbotron.png';

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        {/* <Navbar /> */}
        <section>
          <div className="grid items-center justify-center min-h-screen grid-cols-12 bg-secondary">
            <div className="col-span-6">
              <h1 className="text-5xl font-bold leading-[60px]">
                <span className="text-orange-500">Adopt</span> your pet,
                <br /> to be your best friend <br /> at all time
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              placeat vero consectetur facilis libero molestiae labore
              excepturi, consequatur, minus voluptatem neque cupiditate pariatur
              quibusdam dolore unde voluptates natus repellat molestias.
            </div>
            <div className="col-span-6">
              <img
                src={image_jumbotron}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
