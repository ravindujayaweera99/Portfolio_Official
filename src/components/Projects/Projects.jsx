import Navbar from "../Navbar/Navbar";
import "./Projects.css";
import { motion, easeOut } from "framer-motion";
import sanlak from "../../assets/project-images/sanlak.png";
import portfolio from "../../assets/project-images/portfolio.png";
import coffee from "../../assets/project-images/coffee.png";
import Footer from "../Footer/Footer";

const projects = [
  {
    id: 1,
    name: "Personal Portfolio",
    desc: "This is the project you are currently visiting in.",
    tech: "React, CSS",
    img: portfolio,
    link: "/",
  },
  {
    id: 2,
    name: "Sales and Inventory System",
    desc: "This is a full stack web app created for a Paint shop to control their day to day sales and Inventory management work.",
    tech: "HTML, CSS, Javascript, php, mySQL",
    img: "",
    link: "https://github.com/ravindujayaweera99/Paint_Shop_App_New",
  },
  {
    id: 3,
    name: "Sanlak (Pvt) Ltd Official Website",
    desc: "Official Website of SANLAK (Pvt) Ltd.This is a website using to showcase their services and projects to customers.",
    tech: "HTML, CSS, Javascript, Figma",
    img: sanlak,
    link: "https://www.sanlak.lk",
  },
  {
    id: 4,
    name: "Coffee Shop Website",
    desc: "Specially made for a client from Romania.This is a website for a Coffee shop that showcase their products and details.",
    tech: "HTML, CSS, Javascript, Figma",
    img: coffee,
    link: "https://ravindujayaweera99.github.io/landing_coffee/",
  },
];

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: easeOut }}
        className="wrapper-projects"
      >
        <Navbar />
        <h1 className="projects-heading">My Projects</h1>
        <div className="projects">
          {projects.map((p) => (
            <a key={p.id} href={p.link} target="_blank">
              <div className="project">
                <div className="left">
                  <img src={p.img} alt="project-image" />
                </div>
                <div className="right">
                  <h1>{p.name}</h1>
                  <p>{p.desc}</p>
                  <h2 className="techused">{p.tech}</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
