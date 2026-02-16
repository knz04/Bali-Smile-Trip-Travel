import "./App.css";
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
    </>
  );
}

export default App;
