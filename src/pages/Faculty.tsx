import React from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function Faculty() {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Sports Department",
      specialization: "Sports Psychology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Prof. Michael Chen",
      role: "Senior Sports Coach",
      specialization: "Athletic Training",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Dr. Emily Williams",
      role: "Sports Physiotherapist",
      specialization: "Rehabilitation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Coach David Thompson",
      role: "Head Coach",
      specialization: "Multi-sport Training",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    <Header />
    <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#900] mb-12">Our Faculty</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#900] font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#900] mb-6">Faculty Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 bg-[#900] rounded-full mt-2"></span>
              <p className="flex-1">Multiple national and international certifications in sports coaching and training</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 bg-[#900] rounded-full mt-2"></span>
              <p className="flex-1">Published research papers in renowned sports journals</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-2 h-2 bg-[#900] rounded-full mt-2"></span>
              <p className="flex-1">Experience in training national-level athletes</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}