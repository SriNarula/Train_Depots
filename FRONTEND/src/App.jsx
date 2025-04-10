import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs.jsx";
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Map from "./Components/Map";               
import DepotDetail from "./Components/DepotDetail";
import NavBar from "./NavBar";
import Footer from "./Footer.jsx";
import WashingLineDetails from "./Components/WashingLineDetails.jsx";
import CoachMaintenance from "./Components/CoachMaintenance.jsx"; 

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/depot/:id" element={<DepotDetail />} />
          <Route path="/washing-line-details" element={<WashingLineDetails />} />
          <Route path="/coach-maintenance" element={<CoachMaintenance />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
