import { Routes, Route } from 'react-router-dom';
import NavigationArea from './Components/Navigation';
import Banner from './Components/Banner';
import Services from './Components/Services';
import ClubEvents from './Components/ClubEvents';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; 
import './App.css';



function App() {
  return (
    <>
      <div className="appLayout">
        <NavigationArea />
        
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/aboutus" element={<Services />} />
          <Route path="/events" element={<ClubEvents />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> {/* 2. Add this route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;