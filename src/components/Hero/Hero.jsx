import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Ravindu Jayaweera</h1>
        <h2>Freelance Web Developer</h2>
        <Link to={"/contact"}><button className="hire-me">Hire Me</button></Link>
      </div>
    </div>
  );
};

export default Hero;
