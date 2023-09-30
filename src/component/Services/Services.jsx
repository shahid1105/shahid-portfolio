import { FaRocket } from "react-icons/fa";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="pt-20">
      <h1
        data-aos="fade-right"
        className="text-2xl md:text-5xl lg:text-5xl text-center font-bold font-serif">
        Services
      </h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <div
          data-aos="fade-right"
          className="card w-[100%] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <MdDesignServices></MdDesignServices>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Design</h2>
            <p className="">
              I design beautiful and functional user interfaces that are easy to
              use and intuitive. Love the creative process of bringing something
              from idea to reality.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="card w-[100%] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <MdDeveloperMode></MdDeveloperMode>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Develop</h2>
            <p className="">
              I develop applications that are fast, responsive and
              user-friendly. Love the process of bringing design to life by code
              and making it useful tool for user.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="card w-[100%] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <FaRocket></FaRocket>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Deliver</h2>
            <p className="">
              As an entreprenuer, I deliver a product by combining my designing
              and development skills. From ideation to deployment to end users,
              I love every parts in between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
