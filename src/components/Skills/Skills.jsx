import "./Skills.css";
import Navbar from "../Navbar/Navbar";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import php from "../../assets/php.png";
import node from "../../assets/node-js.png";
import java from "../../assets/java.png";
import sql from "../../assets/mysql.png";
import mongodb from "../../assets/mongodb.png";
import postgre from "../../assets/postgresql.png";
import figma from "../../assets/figma.png";
import { motion, easeOut } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: easeOut }}
    >
      <Navbar />
      <div className="skills">
        <h1 className="title">My Skills</h1>
        <div className="skillColumns">
          <div className="frontend">
            <h1>Front-end</h1>
            <img src={react} alt="react-logo" />
            <img src={html} alt="react-logo" />
            <img src={css} alt="react-logo" />
            <img src={js} alt="react-logo" />
          </div>
          <div className="backend">
            <h1>Back-end</h1>
            <img src={node} alt="react-logo" />
            <img src={php} alt="react-logo" />
            <img src={java} alt="react-logo" />
          </div>
          <div className="database">
            <h1>Databse</h1>
            <img src={sql} alt="react-logo" />
            <img src={mongodb} alt="react-logo" />
            <img src={postgre} alt="react-logo" />
          </div>
          <div className="uiux">
            <h1>UI UX</h1>
            <img src={figma} alt="react-logo" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
