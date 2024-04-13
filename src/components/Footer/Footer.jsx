import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <ul>
          <span className="detail-name">Find me:</span>
          <li>
            <a href="https://github.com/ravindujayaweera99" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ravindu-jayaweera-a170721b9/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://web.facebook.com/ravindu.jayaweera.96/"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <h3>
        <span className="detail-name">Email: </span>
        www.ravindujayaweera99@gmail.com
      </h3>

      <h3>
        <span className="detail-name">Mobile: </span>+94713563861
      </h3>
    </footer>
  );
};

export default Footer;
