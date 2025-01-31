import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#900] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                RGUKT Nuzvid Campus, Krishna District, Andhra Pradesh - 521202
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +91 XX XXXX XXXX
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                sports@rguktn.ac.in
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#ffcccb]">About Us</Link></li>
              <li><Link to="/facilities" className="hover:text-[#ffcccb]">Facilities</Link></li>
              <li><Link to="/faculty" className="hover:text-[#ffcccb]">Faculty</Link></li>
              <li><Link to="/achievements" className="hover:text-[#ffcccb]">Achievements</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Student Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-[#ffcccb]">Student Portal</Link></li>
              <li><Link to="/sports-calendar" className="hover:text-[#ffcccb]">Sports Calendar</Link></li>
              <li><Link to="/training" className="hover:text-[#ffcccb]">Training Programs</Link></li>
              <li><Link to="/equipment" className="hover:text-[#ffcccb]">Equipment</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ffcccb]"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-[#ffcccb]"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-[#ffcccb]"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-[#ffcccb]"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} RGUKT-AP Nuzvid Campus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}