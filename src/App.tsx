import "./App.css";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Smile from "./components/Smile";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Smile />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
