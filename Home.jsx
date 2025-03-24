import Footer from "../components/Navbar/Footer";
import Hero from "../components/Navbar/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Navbar/Services";
import About from "../components/Navbar/About";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
