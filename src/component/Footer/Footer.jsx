import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-primary-content mt-24 bg-indigo-950">
      <div>
        <img
          className="w-12 h-12 rounded-full bg-white"
          src="https://i.ibb.co/SBm53nt/IMG-1389-01.png"
          alt=""
        />
        <p className="font-bold">Shahid Hasan Portfolio</p>
        <div className="flex justify-evenly gap-3 md:gap-16 lg:gap-16 mt-8">
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
        </div>
        <p className="mt-8">Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-3xl">
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
      </div>
    </footer>
  );
};

export default Footer;
