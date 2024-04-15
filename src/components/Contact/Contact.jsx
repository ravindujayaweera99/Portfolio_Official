import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import worker from "../../assets/coder.gif";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Currently Doing Some Renovations!</h1>
        <img src={worker} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
