import "./App.css";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Explore />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
