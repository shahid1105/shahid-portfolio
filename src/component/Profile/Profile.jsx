import Typical from "react-typical";
import { FaDownload, FaHireAHelper } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-indigo-950">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  text-white pt-24">
        <div className="mx-5 md:mt-10 lg:mt-10 md:mx-auto lg:mx-auto">
          <h1 className="md:text-2xl lg:text-2xl md:mb-5 lg:mb-5 md:mx-[50px] lg:mx-[50px]">
            Hello, I Am{" "}
            <span className="text-red-400 font-bold bg-gradient-to-l from-blue-500 to-red-600 text-transparent bg-clip-text">
              Shahid Hasan
            </span>
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-600 text-transparent bg-clip-text">
            <Typical
              loop={Infinity}
              steps={[
                "Web designer",
                2000,
                "Full Stack developer",
                2000,
                "Mern Stack developer",
                2000,
                "React developer",
                2000,
              ]}
            />
          </h1>
          <h1 className="md:mt-5 lg:mt-5">
            knack of building application with front and back end operation{" "}
          </h1>
          <div className="space-y-3 space-x-5 md:mt-8 lg:mt-8">
            <Link to="/contact">
              <button className="btn btn-primary rounded-full">
                Hire Me <FaHireAHelper></FaHireAHelper>{" "}
              </button>
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1TueRHzfdBKK_ggq-BxYcI5mwSegXAp3v"
              download>
              <button className="btn btn-primary rounded-full">
                Get Resume <FaDownload />
              </button>
            </a>
          </div>
        </div>
        <div className="mx-auto">
          <img
            className="w-[300px] h-[300px] rounded-full my-3 bg-white hover:mix-blend-overlay"
            src="https://i.ibb.co/SBm53nt/IMG-1389-01.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="w-full md:h-36 lg:36 h-10"
        src="https://i.ibb.co/WGr3gfT/360-F-323667240-1w-DLHi-C4-AXO9-Wmxo-OPf0i-Oh-Ba-En5n-Ene.png"
        alt=""
      />
    </div>
  );
};

export default Profile;
