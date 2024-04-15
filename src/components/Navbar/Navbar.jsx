import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">RJ</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/skills"}>My Skills</Link>
        </li>
        <li>
          <Link to={"/projects"}>My Projects</Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About Me</Link>
        </li>
        <li>
          <Link to={"/contact"}><button className="hire-me">Hire Me</button></Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
