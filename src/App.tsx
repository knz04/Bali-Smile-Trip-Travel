import { Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
