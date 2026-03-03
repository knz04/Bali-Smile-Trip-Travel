import { Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
