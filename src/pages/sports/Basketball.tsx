import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Calendar, Medal, School, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

interface Tournament {
  id: string;
  name: string;
  date: string;
  participants: {
    name: string;
    division: string;
    description: string;
    keyPlayers: string[];
    achievements: string[];
  }[];
  faculty: string[];
  performanceHistory: {
    year: string;
    result: string;
  }[];
}

const tournaments: Tournament[] = [
  {
    id: "t1",
    name: "National Basketball Championship 2024",
    date: "2024-03-15",
    participants: [
      {
        name: "Team A",
        division: "Men's Division",
        description: "Elite basketball team known for their fast-paced offense and strong defense.",
        keyPlayers: ["John Smith (Captain)", "Michael Johnson", "David Brown"],
        achievements: ["Champion - National League 2023", "MVP Award - State Championship 2022"]
      },
      {
        name: "Team B",
        division: "Women's Division",
        description: "Dynamic women's basketball team with exceptional teamwork and shooting skills.",
        keyPlayers: ["Sarah Davis (Captain)", "Emma Wilson", "Jessica Thompson"],
        achievements: ["Winner - Regional Tournament 2023", "Best Defense Award - Nationals 2022"]
      },
      {
        name: "Team C",
        division: "Junior Division",
        description: "Promising junior basketball team focusing on skill development and team chemistry.",
        keyPlayers: ["Alex Chen (Captain)", "Marcus Wong", "David Park"],
        achievements: ["Junior Championship - 2023", "Most Improved Team - 2022"]
      }
    ],
    faculty: ["Coach Michael Jordan", "Coach Lisa Leslie"],
    performanceHistory: [
      { year: "2023", result: "Champion" },
      { year: "2022", result: "Runner-up" }
    ]
  },
  {
    id: "t2",
    name: "State Basketball League 2024",
    date: "2024-04-20",
    participants: [
      {
        name: "Team A",
        division: "Senior Division",
        description: "Elite basketball team known for their fast-paced offense and strong defense.",
        keyPlayers: ["John Smith (Captain)", "Michael Johnson", "David Brown"],
        achievements: ["Champion - National League 2023", "MVP Award - State Championship 2022"]
      },
      {
        name: "Team B",
        division: "Mixed Division",
        description: "Dynamic mixed basketball team with exceptional teamwork and shooting skills.",
        keyPlayers: ["Sarah Davis (Captain)", "Emma Wilson", "Jessica Thompson"],
        achievements: ["Winner - Regional Tournament 2023", "Best Defense Award - Nationals 2022"]
      }
    ],
    faculty: ["Coach James Williams"],
    performanceHistory: [
      { year: "2023", result: "Semifinalist" },
      { year: "2022", result: "Quarterfinalist" }
    ]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1200"
];

const achievements = [
  {
    year: "2023",
    title: "National Basketball Championship Winners",
    description: "Team secured first place in the national championship",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "State Basketball League Champions",
    description: "Outstanding performance in team category",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2021",
    title: "Inter-University Basketball Tournament",
    description: "Runner-up in the prestigious tournament",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800"
  }
];

function Basketball() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Tournament['participants'][0] | null>(null);

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
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center text-base border-b border-gray-200">
        <a href="/" className="text-[#900] hover:text-[#700] transition-colors font-medium">Physical Education</a>
        <ChevronRightIcon className="w-5 h-5 mx-2 text-gray-500" />
        <span className="text-gray-800 font-semibold text-lg">Basketball</span>
      </div>

      {/* Gallery Section */}
      <section className="py-8 px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#900]">
          Basketball Gallery
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img
              src={galleryImages[currentImage]}
              alt={`Basketball ${currentImage + 1}`}
              className="w-full h-full object-cover object-center transform transition-transform duration-500"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7 text-[#900]" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7 text-[#900]" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentImage === idx ? 'bg-[#900]' : 'bg-white/80 hover:bg-white'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Calendar Section */}
      <section className="py-8 px-4 bg-white border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#900] flex items-center justify-center gap-2">
            <Calendar className="w-8 h-8" />
            Tournament Calendar
          </h2>
          <div className="grid gap-4">
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
        </div>
      </section>

      {/* Tournament Details Modal */}
      {selectedTournament && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                    <div
                      key={idx}
                      className="flex flex-col bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedTeam(participant)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-lg">{participant.name}</span>
                        <span className="text-gray-600 text-sm bg-white px-2 py-1 rounded">
                          {participant.division}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{participant.description}</p>
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
              <div>
                <h4 className="text-lg font-semibold mb-3 text-[#900] flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Performance History
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedTournament.performanceHistory.map((history, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg flex justify-between">
                      <span>{history.year}</span>
                      <span className="font-medium">{history.result}</span>
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

      {/* Team Details Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-6 text-[#900] border-b-2 border-[#900] pb-2">
              {selectedTeam.name} - {selectedTeam.division}
            </h3>
            <p className="text-gray-700 mb-4">{selectedTeam.description}</p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#900]">Key Players:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedTeam.keyPlayers.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#900]">Achievements:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedTeam.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setSelectedTeam(null)}
              className="mt-6 bg-[#900] text-white px-6 py-2 rounded-lg hover:bg-[#700] transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <section className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#900] flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8" />
            Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-[#900] flex gap-6"
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

export default Basketball;