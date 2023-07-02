import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Profile></Profile>
        <AboutMe></AboutMe>
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
