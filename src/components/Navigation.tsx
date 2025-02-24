import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  const sports = [
    { path: '/archery', name: 'Archery' },
{ path: '/badminton', name: 'Badminton' },
{ path: '/basketball', name: 'Basketball' },
{ path: '/cricket', name: 'Cricket' },
{ path: '/fencing', name: 'Fencing' },
{ path: '/football', name: 'Football' },
{ path: '/kabaddi', name: 'Kabaddi' },
{ path: '/softball', name: 'Softball' },
{ path: '/volleyball', name: 'Volleyball' },
{ path: '/yoga', name: 'Yoga' }

  ];

  return (
    <nav className="bg-[#900] text-white py-3 relative">
      <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
        <Link to="/" className="hover:text-[#ffcccb] transition-colors">HOME</Link>
        <div className="relative">
          <button 
            className="flex items-center hover:text-[#ffcccb] transition-colors"
            onMouseEnter={() => setShowSportsDropdown(true)}
            onMouseLeave={() => setShowSportsDropdown(false)}
          >
            SPORTS <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {showSportsDropdown && (
            <div 
              className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              onMouseEnter={() => setShowSportsDropdown(true)}
              onMouseLeave={() => setShowSportsDropdown(false)}
            >
              {sports.map((sport) => (
                <Link 
                  key={sport.path}
                  to={sport.path} 
                  className="block px-4 py-2 text-[#900] hover:bg-gray-100"
                >
                  {sport.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/facilities" className="hover:text-[#ffcccb] transition-colors">FACILITIES</Link>
        <Link to="/faculty" className="hover:text-[#ffcccb] transition-colors">FACULTY</Link>
        <Link to="/achievements" className="hover:text-[#ffcccb] transition-colors">ACHIEVEMENTS</Link>
        <Link to="/gallery" className="hover:text-[#ffcccb] transition-colors">GALLERY</Link>
        <Link to="/login" className="hover:text-[#ffcccb] transition-colors">STUDENT LOGIN</Link>
        <Link to="/contact" className="hover:text-[#ffcccb] transition-colors">CONTACT US</Link>
      </div>
    </nav>
  );
}