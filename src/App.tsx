import { Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
