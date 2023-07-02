import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaHireAHelper,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="mt-10">
      <h1 className="md:text-5xl lg:text-5xl text-center">About Me</h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>
      <div>
        <h1 className="md:text-3xl lg:text-3xl text-center">
          I Am Shahid Hasan and{" "}
          <span className="text-red-500 ">Web Developer</span>
        </h1>
        <p className="px-12 mt-8 text-2xl">
          Dedicated web developer, Strong creative and analytical
          skills.Motivated designer and developer with experience creating
          custom websites.Strong collaboration skills and proven history of
          application development.
        </p>
      </div>
      <div className="mt-10 md:mx-24 lg:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h1 className="mb-2 md:text-xl lg:text-xl px-3">
            Email: shahidhasan1105@gmail.com
          </h1>
          <hr />
          <h1 className="mb-2 md:text-xl lg:text-xl px-3 mt-5">
            Phone: +880 1860-861105
          </h1>
          <hr />
          <h1 className="mb-2 md:text-xl lg:text-xl px-3 mt-5">
            City: Rangpur
          </h1>
          <hr />
          <h1 className="mb-2 md:text-xl lg:text-xl px-3 mt-5">
            Education: Diploma Engineer in CSE
          </h1>
          <hr />
        </div>
        <div className="mx-auto my-auto">
          <div className=" font-bold text-5xl text-red-500 flex gap-4 mt-10 ">
            <Link to="https://web.facebook.com/shohid.hasan.351/">
              <FaFacebook></FaFacebook>
            </Link>
            <Link to="https://github.com/shahid1105">
              {" "}
              <FaGithub></FaGithub>{" "}
            </Link>
            <Link to="https://www.linkedin.com/in/shahid-hasan-051387280/">
              <FaLinkedin></FaLinkedin>
            </Link>
          </div>
          <div className="space-y-3 space-x-5 md:mt-8 lg:mt-8">
            <button className="btn btn-primary rounded-full">
              Hire Me <FaHireAHelper></FaHireAHelper>{" "}
            </button>
            <button className="btn btn-primary rounded-full">
              Get Resume <FaDownload></FaDownload>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;