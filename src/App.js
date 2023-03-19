import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tours from "./components/Tours";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  console.log("Hello");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Services />
      <Footer />
    </>
  );
}

export default App;
