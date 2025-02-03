import React, { useState } from 'react';
import { Medal, Trophy, Award, X } from 'lucide-react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type Player = {
  name: string;
  role: string;
  achievement: string;
  image: string;
};

type Achievement = {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
  players: Player[];
};

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      year: "2023",
      title: "National Sports Championship",
      description: "Gold medal in Basketball (Men's)",
      icon: <Trophy className="w-6 h-6 text-[#900]" />,
      players: [
        {
          name: "John Smith",
          role: "Team Captain",
          achievement: "Tournament MVP",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Michael Chen",
          role: "Point Guard",
          achievement: "Best Defensive Player",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
      ]
    },
    {
      year: "2023",
      title: "Inter-University Tournament",
      description: "Winners in Cricket and Volleyball",
      icon: <Medal className="w-6 h-6 text-[#900]" />,
      players: [
        {
          name: "David Kumar",
          role: "Cricket Captain",
          achievement: "Best Batsman",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Sarah Johnson",
          role: "Volleyball Captain",
          achievement: "Best Spiker",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        }
      ]
    },
    {
      year: "2022",
      title: "State Level Competition",
      description: "First place in Athletics",
      icon: <Award className="w-6 h-6 text-[#900]" />,
      players: [
        {
          name: "Emily Williams",
          role: "Sprinter",
          achievement: "100m Gold Medalist",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "James Wilson",
          role: "Long Jump",
          achievement: "State Record Holder",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#900] mb-12">Our Achievements</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-500">{achievement.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Modal */}
        {selectedAchievement && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#900]">{selectedAchievement.title}</h2>
                    <p className="text-gray-600">{selectedAchievement.description}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedAchievement(null)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedAchievement.players.map((player, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{player.name}</h3>
                        <p className="text-[#900]">{player.role}</p>
                        <p className="text-gray-600 text-sm">{player.achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#900] mb-2">50+</div>
            <p className="text-gray-600">National Medals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#900] mb-2">100+</div>
            <p className="text-gray-600">State Level Awards</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-[#900] mb-2">200+</div>
            <p className="text-gray-600">Tournament Victories</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}