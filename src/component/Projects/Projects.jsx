import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="pt-20">
      <h1
        data-aos="fade-left"
        className="text-2xl md:text-5xl lg:text-5xl text-center font-bold font-serif">
        Projects
      </h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>
      <div className="mt-10 md:mx-24 lg:mx-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <div
          data-aos="fade-right"
          className="card w-full bg-base-100 shadow-xl border-t-2">
          <figure>
            <img
              className="h-[300px] w-4/6 mt-3"
              src="https://i.ibb.co/84RLL2S/Sports-Talent-Academy-Home.png"
              alt="Sports academy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sports Talent Academy</h2>
            <p>
              Sports Talent Academy is a website where we can easily register
              And can learn about sports
            </p>
            <div className="card-actions justify-center mt-5  ">
              <Link to="https://sports-talent-academy.web.app/">
                <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-orange-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card w-full bg-base-100 shadow-xl border-t-2">
          <figure>
            <img
              className="h-[300px] w-4/6 mt-3"
              src="https://i.ibb.co/T2bGb6G/Toy-Car-World.png"
              alt="toy car"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy Car World</h2>
            <p>
              Toy Car World is a website where we can easily list various cars
              and toys for kids.
            </p>
            <div className="card-actions justify-center mt-5  ">
              <Link to="https://toy-car-world.web.app/">
                <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-orange-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px]"
              src="https://i.ibb.co/4sJZWjq/chef.png"
              alt="chef"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kitchen genius</h2>
            <p>
              Kitchen genius is a website where we can learn about various Thai
              chefs and Thai recipes
            </p>
            <div className="card-actions justify-center mt-5 ">
              <Link to="https://kitchen-genius-client.web.app/">
                <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-orange-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
