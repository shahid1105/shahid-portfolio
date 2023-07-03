import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Services></Services>
        <Skills></Skills>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
