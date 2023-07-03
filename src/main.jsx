import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe.jsx";
import Services from "./component/Services/Services.jsx";
import Skills from "./component/Skills/Skills.jsx";
import Projects from "./component/Projects/Projects.jsx";
import ContactMe from "./component/ContactMe/ContactMe.jsx";
import Home from "./component/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "contact",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
  {
    path: "home",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
