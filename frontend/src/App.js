import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Missions from "./pages/Missions";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Donation from "./pages/Donation";
import AddMission from "./pages/AddMission";
import RevealOnScroll from "./pages/RevealOnScroll";

function App() {
  return (
    <div  data-aos="fade-right">
      <Navbar />
        <RevealOnScroll>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/addmission" element={<AddMission />} />
      </Routes>
        </RevealOnScroll>
      <Footer />
    </div>
  );
}

export default App;
