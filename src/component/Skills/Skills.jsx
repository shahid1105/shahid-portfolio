import { FaTools } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdLanguage, MdLocalLibrary } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="mt-20">
      <h1
        data-aos="fade-left"
        className="text-2xl md:text-5xl lg:text-5xl text-center font-bold font-serif">
        Skills
      </h1>
      <div className="divider w-2/6 mx-auto"></div>
      <div className="divider w-1/6 mx-auto"></div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div data-aos="fade-right" className="card w-full glass">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <MdLanguage></MdLanguage>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Language</h2>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>C</p>
          </div>
        </div>
        <div data-aos="fade-up" className="card w-full glass">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <MdLocalLibrary></MdLocalLibrary>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Libraries/Frameworks</h2>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>React.js</p>
          </div>
        </div>
        <div data-aos="fade-down" className="card w-full glass">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <GrTechnology></GrTechnology>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technologies</h2>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Firebase</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div data-aos="fade-left" className="card w-full glass">
          <figure className="px-10 pt-10 text-red-500 text-[80px]">
            <FaTools></FaTools>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tools</h2>
            <p>Vercel</p>
            <p>Netlify</p>
            <p>GitHub</p>
            <p>Chrome Dev Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
