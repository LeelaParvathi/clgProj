import React, { useState } from 'react';
import { Dumbbell, FileWarning as Running, Trophy, X } from 'lucide-react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type Facility = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  location: string;
  images: string[];
}

export function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilities: Facility[] = [
    {
      id: "gymnasium",
      icon: <Dumbbell className="w-8 h-8 text-[#900]" />,
      title: "Gymnasium",
      description: "State-of-the-art gymnasium equipped with modern fitness equipment and dedicated trainers.",
      location: "First Floor, Sports Complex Building",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1200"
      ]
    },
    {
      id: "sports-fields",
      icon: <Running className="w-8 h-8 text-[#900]" />,
      title: "Sports Fields",
      description: "Multiple outdoor sports fields including cricket ground, football field, and athletics track.",
      location: "Main Campus Ground",
      images: [
        "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80&w=1200", // Cricket
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=1200", // Football
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1200", // Archery
        "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=1200"  // Volleyball
      ]
    },
    {
      id: "indoor-courts",
      icon: <Trophy className="w-8 h-8 text-[#900]" />,
      title: "Indoor Courts",
      description: "Professional indoor courts for badminton, basketball, and yoga with international standards.",
      location: "Indoor Sports Complex",
      images: [
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200", // Basketball
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1200", // Badminton
        "https://images.unsplash.com/photo-1628891890467-b79de43880d4?auto=format&fit=crop&q=80&w=1200", // Fencing
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200"  // Yoga
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedFacility!.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedFacility!.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <Header />
    <Navigation/>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#900] mb-12">Our Facilities</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div 
              key={facility.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 duration-200"
              onClick={() => {
                setSelectedFacility(facility);
                setCurrentImageIndex(0);
              }}
            >
              <div className="flex justify-center mb-6">
                {facility.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-3">{facility.title}</h3>
              <p className="text-gray-600 text-center">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-[#900]">{selectedFacility.title}</h2>
                  <button 
                    onClick={() => setSelectedFacility(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-lg mb-3">{selectedFacility.description}</p>
                <p className="text-[#900] font-semibold text-lg mb-6">Location: {selectedFacility.location}</p>

                {/* Image Carousel */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={selectedFacility.images[currentImageIndex]} 
                    alt={`${selectedFacility.title} view ${currentImageIndex + 1}`}
                    className="w-full h-[600px] object-cover"
                  />
                  
                  {selectedFacility.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
                      >
                        ←
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity"
                      >
                        →
                      </button>
                      
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                        {selectedFacility.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#900] mb-6">Additional Amenities</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#900] rounded-full"></span>
              <span className="text-lg">Changing rooms with lockers</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#900] rounded-full"></span>
              <span className="text-lg">First aid and medical facilities</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#900] rounded-full"></span>
              <span className="text-lg">Equipment rental service</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-[#900] rounded-full"></span>
              <span className="text-lg">Refreshment area</span>
            </li>
          </ul>
        </div>
      </div>
    <Footer />
    </div>
  );
}