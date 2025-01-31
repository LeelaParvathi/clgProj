import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Calendar, Medal, School, ChevronRight as ChevronRightIcon } from 'lucide-react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  participants: {
    name: string;
    weapon: string;
  }[];
  faculty: string[];
}

const tournaments: Tournament[] = [
  {
    id: "t1",
    name: "National University Games 2024",
    date: "2024-03-15",
    participants: [
      { name: "John Doe", weapon: "Foil" },
      { name: "Jane Smith", weapon: "Épée" }
    ],
    faculty: ["Dr. Robert Wilson", "Prof. Sarah Parker"]
  },
  {
    id: "t2",
    name: "State Championships 2024",
    date: "2024-04-20",
    participants: [
      { name: "Mike Johnson", weapon: "Sabre" },
      { name: "Emily Brown", weapon: "Foil" }
    ],
    faculty: ["Prof. James Anderson"]
  },
  {
    id: "t3",
    name: "Inter-University Tournament",
    date: "2024-05-10",
    participants: [
      { name: "Sarah Wilson", weapon: "Épée" },
      { name: "Tom Davis", weapon: "Sabre" }
    ],
    faculty: ["Dr. Maria Garcia", "Prof. David Lee"]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1566796201787-b088b10c194c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1566796199828-1963d81f0f87?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1566796199843-33cdf1d3e022?auto=format&fit=crop&q=80&w=1200",
];

const achievements = [
  {
    year: "2023",
    title: "Gold Medal - National University Games",
    description: "Team secured first place in the national championship",
    image: "https://images.unsplash.com/photo-1566796201787-b088b10c194c?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "Silver Medal - State Championships",
    description: "Outstanding performance in individual category",
    image: "https://images.unsplash.com/photo-1566796199828-1963d81f0f87?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2021",
    title: "Bronze Medal - Inter-University Tournament",
    description: "Exceptional performance in team events",
    image: "https://images.unsplash.com/photo-1566796199843-33cdf1d3e022?auto=format&fit=crop&q=80&w=800"
  }
];

function Fencing() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
      <nav className="bg-[#900] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-6">
          <a href="/" className="hover:text-[#ffcccb] transition-colors">Home</a>
          <a href="#" className="hover:text-[#ffcccb] transition-colors">Sports</a>
          <a href="#" className="hover:text-[#ffcccb] transition-colors">Achievements</a>
          <a href="#" className="hover:text-[#ffcccb] transition-colors">Calendar</a>
          <a href="#" className="hover:text-[#ffcccb] transition-colors">Media</a>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center text-sm">
        <a href="/" className="text-[#900] hover:text-[#700] transition-colors">Home</a>
        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-500" />
        <a href="/physical-education" className="text-[#900] hover:text-[#700] transition-colors">Physical Education</a>
        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-500" />
        <span className="text-gray-600 font-medium">Fencing</span>
      </div>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#900]">
          Fencing Gallery
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <img
              src={galleryImages[currentImage]}
              alt={`Fencing ${currentImage + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#900]" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#900]" />
          </button>
        </div>
      </section>

      {/* Tournament Calendar Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#900] flex items-center justify-center gap-2">
            <Calendar className="w-8 h-8" />
            Tournament Calendar
          </h2>
          <div className="grid gap-6">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border-l-4 border-[#900]"
                onClick={() => setSelectedTournament(tournament)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#900]">{tournament.name}</h3>
                    <p className="text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {new Date(tournament.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <School className="w-8 h-8 text-[#900] opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Tournament Details Modal */}
          {selectedTournament && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                <h3 className="text-2xl font-bold mb-6 text-[#900] border-b-2 border-[#900] pb-2">
                  {selectedTournament.name}
                </h3>
                <div className="grid gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#900] flex items-center gap-2">
                      <Medal className="w-5 h-5" />
                      Participants
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedTournament.participants.map((participant, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                          <span className="font-medium">{participant.name}</span>
                          <span className="text-gray-600 text-sm bg-white px-2 py-1 rounded">
                            {participant.weapon}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#900] flex items-center gap-2">
                      <School className="w-5 h-5" />
                      Faculty
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedTournament.faculty.map((faculty, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                          {faculty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTournament(null)}
                  className="mt-6 bg-[#900] text-white px-6 py-2 rounded-lg hover:bg-[#700] transition-colors w-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#900] flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8" />
            Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-[#900] flex gap-6"
              >
                <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <Medal className="w-8 h-8 text-[#900] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#900]">{achievement.title}</h3>
                      <p className="text-gray-600 mt-1">{achievement.year}</p>
                      <p className="text-gray-700 mt-2">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fencing;