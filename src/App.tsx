import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Smile from "./components/Smile";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Smile />
      <Footer />
    </>
  );
}

export default App;
