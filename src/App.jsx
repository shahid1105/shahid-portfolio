import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <div className="pt-20">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
