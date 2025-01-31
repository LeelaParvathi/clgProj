import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Calendar, 
  Bell, 
  Clock, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const bannerImages = [
  "https://images.unsplash.com/photo-1566796201787-b088b10c194c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=2000"
];

const newsUpdates = [
  {
    id: 1,
    title: "National Sports Meet 2024 Registration Open",
    date: "2024-03-10",
    description: "Register now for the upcoming National Sports Meet. Multiple sports categories available."
  },
  {
    id: 2,
    title: "New Sports Complex Inauguration",
    date: "2024-03-15",
    description: "State-of-the-art sports complex to be inaugurated by the Sports Minister."
  },
  {
    id: 3,
    title: "Sports Achievement Awards Ceremony",
    date: "2024-03-20",
    description: "Annual ceremony to recognize outstanding sports achievements."
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Inter-University Basketball Tournament",
    date: "2024-04-01",
    venue: "Main Basketball Court"
  },
  {
    id: 2,
    title: "Yoga Workshop for Beginners",
    date: "2024-04-05",
    venue: "Indoor Sports Complex"
  },
  {
    id: 3,
    title: "Football League Kickoff",
    date: "2024-04-10",
    venue: "University Football Ground"
  }
];

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#a30000] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#a30000]">
              Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
            </h1>
            <h2 className="text-lg mt-2">Nuzvid Campus</h2>
            <p className="text-sm mt-1">Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh</p>
            <p className="text-sm">(Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f) of UGC Act, 1956)</p>
            <p className="text-sm font-semibold mt-1">Accredited by 'NAAC' with 'B+' Grade</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
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
                <Link to="/fencing" className="block px-4 py-2 text-[#900] hover:bg-gray-100">Fencing</Link>
                <Link to="/volleyball" className="block px-4 py-2 text-[#900] hover:bg-gray-100">Volleyball</Link>
                <Link to="/basketball" className="block px-4 py-2 text-[#900] hover:bg-gray-100">Basketball</Link>
                <Link to="/football" className="block px-4 py-2 text-[#900] hover:bg-gray-100">Football</Link>
                <Link to="/yoga" className="block px-4 py-2 text-[#900] hover:bg-gray-100">Yoga</Link>
              </div>
            )}
          </div>
          <Link to="/facilities" className="hover:text-[#ffcccb] transition-colors">FACILITIES</Link>
          <Link to="/faculty" className="hover:text-[#ffcccb] transition-colors">FACULTY</Link>
          <Link to="/achievements" className="hover:text-[#ffcccb] transition-colors">ACHIEVEMENTS</Link>
          <Link to="/gallery" className="hover:text-[#ffcccb] transition-colors">GALLERY</Link>
          <Link to="/student-login" className="hover:text-[#ffcccb] transition-colors">STUDENT LOGIN</Link>
          <Link to="/contact" className="hover:text-[#ffcccb] transition-colors">CONTACT US</Link>
        </div>
      </nav>

      {/* Banner Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Excellence in Sports</h2>
                <p className="text-xl">Nurturing Champions, Building Character</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#900]">Our Mission</h2>
          <div className="text-center text-gray-700 space-y-6">
            <p>
              The Department of Physical Education at RGUKT-AP is dedicated to promoting excellence in sports and physical fitness. 
              We aim to develop well-rounded individuals through comprehensive sports education and training programs.
            </p>
            <p>
              Our focus extends beyond athletic achievement to character building, leadership development, and the promotion of 
              a healthy lifestyle among our students.
            </p>
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#900]">News & Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsUpdates.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <Bell className="w-6 h-6 text-[#900] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#900] mb-2">{news.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(news.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-700">{news.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#900]">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-[#900]" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#900]">{event.title}</h3>
                    <p className="text-gray-600 mt-1">
                      <span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Venue:</span> {event.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#900]">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-[#900] mb-4">Sports</h3>
              <Link to="/fencing" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Fencing
              </Link>
              <Link to="/volleyball" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Volleyball
              </Link>
              <Link to="/basketball" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Basketball
              </Link>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-[#900] mb-4">Resources</h3>
              <Link to="/facilities" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Facilities
              </Link>
              <Link to="/faculty" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Faculty
              </Link>
              <Link to="/achievements" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Achievements
              </Link>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-[#900] mb-4">Student Zone</h3>
              <Link to="/student-login" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Student Login
              </Link>
              <Link to="/gallery" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Gallery
              </Link>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-[#900]">
                <ExternalLink className="w-4 h-4 mr-2" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><Link to="/student-login" className="hover:text-[#ffcccb]">Student Portal</Link></li>
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
    </div>
  );
}

export default Home;