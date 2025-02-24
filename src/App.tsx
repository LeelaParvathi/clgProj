import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigation } from './components/Navigation';
import Home from './pages/sports/Home';
import Fencing from './pages/sports/Fencing';
import Volleyball from './pages/sports/Volleyball';
import Basketball from './pages/sports/Basketball';
import Softball from './pages/sports/Softball';
import Yoga from './pages/sports/Yoga';
import Archery from './pages/sports/Archery';
import Badminton from './pages/sports/Badminton';
import Football from './pages/sports/Football';
import Cricket from './pages/sports/Cricket';
import Kabaddi from './pages/sports/Kabaddi';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Facilities } from './pages/Facilities';
import { Faculty } from './pages/Faculty';
import { Achievements } from './pages/Achievements';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import OTPVerification from './pages/auth/OTPVerification';
import StudentProfile from './pages/profile/StudentProfile';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fencing" element={<Fencing />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/softball" element={<Softball />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/archery" element={<Archery />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/football" element={<Football />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/Kabaddi" element={<Kabaddi />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<OTPVerification />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;