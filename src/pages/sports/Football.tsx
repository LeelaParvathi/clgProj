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
    category: string;
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
    name: "University Football Championship 2024",
    date: "2024-03-25",
    participants: [
      {
        name: "Varsity Team",
        category: "Men's First Team",
        description: "Premier football squad known for attacking style and tactical flexibility.",
        keyPlayers: ["Marcus Rodriguez (Captain)", "James Thompson", "Alex Kim"],
        achievements: ["League Champions 2023", "Cup Winners 2022"]
      },
      {
        name: "Development Squad",
        category: "Reserve Team",
        description: "Rising talents showing promising development and competitive spirit.",
        keyPlayers: ["Tom Wilson (Captain)", "Chris Lee", "Mohammed Ahmed"],
        achievements: ["Reserve League Winners 2023", "Youth Cup Finalists 2022"]
      }
    ],
    faculty: ["Head Coach Carlos Martinez", "Assistant Coach John Baker"],
    performanceHistory: [
      { year: "2023", result: "Champions" },
      { year: "2022", result: "Runners-up" }
    ]
  },
  {
    id: "t2",
    name: "Inter-University League 2024",
    date: "2024-04-15",
    participants: [
      {
        name: "Combined Team",
        category: "University Select",
        description: "Elite selection of players representing university in competitive matches.",
        keyPlayers: ["David Park (Captain)", "Ryan Smith", "Luis Garcia"],
        achievements: ["Inter-University Champions 2023", "Regional Trophy Winners 2022"]
      }
    ],
    faculty: ["Coach Michael Thompson"],
    performanceHistory: [
      { year: "2023", result: "League Winners" },
      { year: "2022", result: "Third Place" }
    ]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=1200"
];

const achievements = [
  {
    year: "2023",
    title: "University League Champions",
    description: "Dominant performance throughout the season securing the league title",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "Cup Winners - National University Championship",
    description: "Spectacular cup run culminating in victory at the finals",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2021",
    title: "Regional Tournament Champions",
    description: "Undefeated run through the regional tournament",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800"
  }
];

function Football() {
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

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center text-base border-b border-gray-200">
        <a href="/" className="text-[#900] hover:text-[#700] transition-colors font-medium">Physical Education</a>
        <ChevronRightIcon className="w-5 h-5 mx-2 text-gray-500" />
        <span className="text-gray-800 font-semibold text-lg">Football</span>
      </div>

      <section className="py-8 px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#900]">
          Football Gallery
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img
              src={galleryImages[currentImage]}
              alt={`Football ${currentImage + 1}`}
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

export default Football;
