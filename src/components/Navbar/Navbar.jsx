import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">RJ</h1>
      <ul>
        <li>Home</li>
        <li>My Skills</li>
        <li>My Project</li>
        <li>About Me</li>
        <li>
          <button className="hire-me">Hire Me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
