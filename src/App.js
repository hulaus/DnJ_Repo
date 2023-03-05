import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComp/Navbar';
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import CustomPieces from './components/CustomPieces/CustomPieces';
import './App.css';
import ScrollspyNavbar from './components/ScrollspyNav/Scrollspy';

function App() {
  return (
    <Router>
      <Navbar />
     <ScrollspyNavbar />
     <div id="Home">
        <Home />
     </div>
     <div id="AboutUs">
      <AboutUs />
     </div>
     <div id="CustomPieces">
      <CustomPieces />
     </div>
     <div id="ContactUs">
      <ContactUs />
     </div>
    </Router>
  );
}

export default App;


//This section is for code I have previously used THAT WORKS but needed to change to update website

/*  USE FOR LATER IF NEED TO MAKE A NORMAL NAVBAR  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/CustomPieces' element={<CustomPieces /> } />
      </Routes>

*/