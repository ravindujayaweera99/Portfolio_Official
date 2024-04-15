import Navbar from "../Navbar/Navbar";
import "./Aboutus.css";
import worker from "../../assets/coder.gif";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>Currently Doing Some Renovations!</h1>
        <img src={worker} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
