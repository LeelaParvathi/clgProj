import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
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
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1566796201787-b088b10c194c?auto=format&fit=crop&q=80&w=2000",
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
      <Header />
      <Navigation />

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
              <Link to="/Fencing" className="flex items-center text-gray-700 hover:text-[#900]">
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

 
      <Footer />
    </div>
  );
}

export default Home;