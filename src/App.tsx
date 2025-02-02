import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/sports/Home';
import Fencing from './pages/sports/Fencing';
import Volleyball from './pages/sports/Volleyball';
import Basketball from './pages/sports/Basketball';
// import Softball from './pages/sports/Softball';
// import Yoga from './pages/sports/Yoga';
// import Archery from './pages/sports/Archery';
// import Badminton from './pages/sports/Badminton';
// import Football from './pages/sports/Football';
// import Cricket from './pages/sports/Cricket';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fencing" element={<Fencing />} />
        <Route path="/volleyball" element={<Volleyball />} />
        <Route path="/basketball" element={<Basketball />} />
        {/* <Route path="/softball" element={<Softball />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/archery" element={<Archery />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/football" element={<Football />} />
        <Route path="/cricket" element={<Cricket />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;