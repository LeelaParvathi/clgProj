import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Calendar, Medal, School, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

const galleryImages = [
  "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1553005746-9245ba190489?auto=format&fit=crop&q=80&w=1200"
];

const tournaments = [
  {
    id: "t1",
    name: "Inter-University Volleyball Championship 2024",
    date: "2024-04-15",
    participants: [
      { name: "Team A", weapon: "Men's Team" },
      { name: "Team B", weapon: "Women's Team" }
    ],
    faculty: ["Coach Robert Wilson", "Coach Sarah Parker"]
  },
  {
    id: "t2",
    name: "State Volleyball Tournament 2024",
    date: "2024-05-20",
    participants: [
      { name: "Mixed Team A", weapon: "Mixed Doubles" },
      { name: "Mixed Team B", weapon: "Mixed Doubles" }
    ],
    faculty: ["Coach James Anderson"]
  }
];

const achievements = [
  {
    year: "2023",
    title: "Gold Medal - National University Games",
    description: "Men's team secured first place in the national championship",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "Silver Medal - State Championships",
    description: "Women's team secured second place",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Volleyball() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTournament, setSelectedTournament] = useState<typeof tournaments[0] | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center text-sm">
        <a href="/" className="text-[#900] hover:text-[#700] transition-colors">Home</a>
        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-500" />
        <a href="/physical-education" className="text-[#900] hover:text-[#700] transition-colors">Physical Education</a>
        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-500" />
        <span className="text-gray-600 font-medium">Volleyball</span>
      </div>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#900]">
          Volleyball Gallery
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
            <img
              src={galleryImages[currentImage]}
              alt={`Volleyball ${currentImage + 1}`}
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
                      Teams
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
                      Coaches
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

      <Footer />
    </div>
  );
}