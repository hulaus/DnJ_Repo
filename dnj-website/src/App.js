import ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Contactus from './components/contact/contactus'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route  path="Contactus" element={<Contactus />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

