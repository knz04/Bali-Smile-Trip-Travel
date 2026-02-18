import "./App.css";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PackageOverview from "./components/PackageOverview";
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
      <PackageOverview />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
