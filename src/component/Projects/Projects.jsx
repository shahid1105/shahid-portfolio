import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-20">
      <h1 className="md:text-5xl lg:text-5xl text-center font-bold font-serif">
        Projects
      </h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>
      <div className="mt-10 md:mx-24 lg:mx-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px]"
              src="https://i.ibb.co/zm2XRTL/sports-talent-academy.png"
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
              <Link>
                <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-orange-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px]"
              src="https://i.ibb.co/pWKQbtr/toy-car.png"
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
              <Link>
                <button className="btn btn-primary bg-gradient-to-r from-purple-400 to-orange-500">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
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
              <Link>
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
