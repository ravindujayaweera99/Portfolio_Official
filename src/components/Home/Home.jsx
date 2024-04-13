import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import { easeOut, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut}}
    >
      <Navbar />
      <Hero />
      <Footer />
    </motion.div>
  );
};

export default Home;
