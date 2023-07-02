import Typical from "react-typical";
import { FaDownload, FaHireAHelper } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-indigo-950">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  text-white pt-24">
        <div className="mx-5 md:mt-10 lg:mt-10 md:mx-auto lg:mx-auto">
          <h1 className="md:text-2xl lg:text-2xl md:mb-5 lg:mb-5 md:mx-[50px] lg:mx-[50px]">
            Hello, I Am{" "}
            <span className="text-red-400 font-bold">Shahid Hasan</span>
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-4xl">
            <Typical
              loop={Infinity}
              steps={[
                "Shahid hasan dev",
                2000,
                "Full Stack dev",
                2000,
                "Mern Stack dev",
                2000,
                "React dev",
                2000,
              ]}
            />
          </h1>
          <h1 className="md:mt-5 lg:mt-5">
            knack of building application with front and back end operation{" "}
          </h1>
          <div className="space-y-3 space-x-5 md:mt-8 lg:mt-8">
            <button className="btn btn-primary rounded-full">
              Hire Me <FaHireAHelper></FaHireAHelper>{" "}
            </button>
            <button className="btn btn-primary rounded-full">
              Get Resume <FaDownload></FaDownload>
            </button>
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
        className="w-full h-36"
        src="https://i.ibb.co/WGr3gfT/360-F-323667240-1w-DLHi-C4-AXO9-Wmxo-OPf0i-Oh-Ba-En5n-Ene.png"
        alt=""
      />
    </div>
  );
};

export default Profile;
