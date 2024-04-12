import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <ul>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Facebook</li>
        </ul>
      </div>
      <h3>
        <span className="detail-name">Email:</span>{" "}
        www.ravindujayaweera99@gmail.com
      </h3>

      <h3>
        <span className="detail-name">Mobile:</span> +94713563861
      </h3>
    </footer>
  );
};

export default Footer;
