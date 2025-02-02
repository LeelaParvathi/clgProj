import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trophy, Calendar, Medal, School, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import fencingLogo from "C:\Users\leela\Downloads\project-bolt-sb1-s5i1mkqe (2)\project\src\WhatsApp Image 2025-01-31 at 23.11.48_924bccc8.jpg"; // Adjust based on location

import "./Fencing.css";
interface Tournament {
  id: string;
  name: string;
  date: string;
  participants: {
    name: string;
    weapon: string;
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
    name: "National University Games 2024",
    date: "2024-03-15",
    participants: [
      { name: "Team A", weapon: "Foil Team" },
      { name: "Team B", weapon: "Épée Team" },
      { name: "Team C", weapon: "Foil Team" }
    ],
    faculty: ["Coach Robert Wilson", "Coach Sarah Parker"],
    performanceHistory: [
      { year: "2023", result: "Champion" },
      { year: "2022", result: "Runner-up" }
    ]
  },
  {
    id: "t2",
    name: "State Championships 2024",
    date: "2024-04-20",
    participants: [
      { name: "Team A", weapon: "Sabre Team" },
      { name: "Team B", weapon: "Mixed Team" }
    ],
    faculty: ["Coach James Anderson"],
    performanceHistory: [
      { year: "2023", result: "Semifinalist" },
      { year: "2022", result: "Quarterfinalist" }
    ]
  }
];

const teamDetails = [
  {
    teamName: "Team A",
    description: "Elite fencing team specializing in foil and sabre techniques with a strong defensive approach.",
    keyPlayers: ["John Doe (Captain)", "Michael Smith", "Edward Williams"],
    achievements: ["Champion - National League 2023", "Runner-up - State Championship 2022"]
  },
  {
    teamName: "Team B",
    description: "Dynamic fencing team known for épée mastery and tactical excellence.",
    keyPlayers: ["Emily Brown (Captain)", "Sophia Davis", "Jessica Miller"],
    achievements: ["Winner - Regional Tournament 2023", "Semifinalist - Nationals 2022"]
  },
  {
    teamName: "Team C",
    description: "Specialized foil team known for aggressive attacking style and precise technique.",
    keyPlayers: ["Alex Chen (Captain)", "Marcus Wong", "David Park"],
    achievements: ["Gold Medal - Regional Championships 2023", "Best Team Performance - University Games 2022"]
  }
];

const galleryImages = [
  "data:image/jpeg;base64,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",
  "/WhatsApp Image 2025-01-31 at 23.11.48_924bccc8.jpg",
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
  const [selectedTeam, setSelectedTeam] = useState<typeof teamDetails[0] | null>(null);

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
        <a href="/" className="text-[#900] hover:text-[#700] transition-colors">Physical Education</a>
        <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-500" />
        <span className="text-gray-600 font-medium">Fencing</span>
      </div>

      {/* Gallery Section */}
<section className="w-full py-12">
  <h2 className="text-3xl font-bold text-center mb-8 text-[#900]">
    Fencing Gallery
  </h2>
  <div className="relative w-full h-screen"> {/* Full screen height */}
    <div className="w-full h-full overflow-hidden">
      <img
        src={galleryImages[currentImage]}
        alt={`Fencing ${currentImage + 1}`}
        className="w-full h-full object-cover transform transition-transform duration-500"
      />
    </div>
    <button
      onClick={prevImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
    >
      <ChevronLeft className="w-6 h-6 text-[#900]" />
    </button>
    <button
      onClick={nextImage}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
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
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            const team = teamDetails.find(t => t.teamName === participant.name);
                            if (team) setSelectedTeam(team);
                          }}
                        >
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

      {/* Team Details Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-6 text-[#900] border-b-2 border-[#900] pb-2">
              {selectedTeam.teamName}
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

export default Fencing;