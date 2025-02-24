// import React from 'react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Trophy, Medal, Award, GraduationCap } from 'lucide-react';

type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'academic' | 'sports' | 'extracurricular';
};

type Certificate = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
};

export default function StudentProfile() {
  const studentInfo = {
    name: "John Doe",
    rollNumber: "2024CS001",
    department: "Computer Science",
    year: "3rd Year",
    email: "john.doe@example.com",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400",
  };

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "First Place - National Coding Championship",
      date: "2024",
      description: "Won first place in the national coding championship organized by Tech Corp.",
      type: "academic"
    },
    {
      id: 2,
      title: "State Level Basketball Tournament",
      date: "2023",
      description: "Led college team to victory in state level basketball tournament.",
      type: "sports"
    },
    {
      id: 3,
      title: "Best Student Leader Award",
      date: "2023",
      description: "Recognized for exceptional leadership in student council.",
      type: "extracurricular"
    }
  ];

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Advanced Web Development",
      issuer: "Tech Academy",
      date: "2024",
      url: "#"
    },
    {
      id: 2,
      name: "Sports Leadership Program",
      issuer: "Sports Council",
      date: "2023",
      url: "#"
    }
  ];

  const renderAchievementIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'academic':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'sports':
        return <Trophy className="w-6 h-6 text-yellow-600" />;
      case 'extracurricular':
        return <Award className="w-6 h-6 text-green-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-[#900] h-32"></div>
          <div className="px-8 pb-8">
            <div className="relative">
              <img
                src={studentInfo.photo}
                alt={studentInfo.name}
                className="w-32 h-32 rounded-full border-4 border-white absolute -top-16"
              />
            </div>
            <div className="mt-20">
              <h1 className="text-3xl font-bold text-gray-900">{studentInfo.name}</h1>
              <div className="mt-2 space-y-1">
                <p className="text-gray-600">{studentInfo.rollNumber} • {studentInfo.department}</p>
                <p className="text-gray-600">{studentInfo.year} • {studentInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#900] mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border-l-4 border-[#900] pl-4 py-2">
                  <div className="flex items-start gap-4">
                    {renderAchievementIcon(achievement.type)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#900] mb-6 flex items-center gap-2">
              <Medal className="w-6 h-6" />
              Certificates
            </h2>
            <div className="space-y-6">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="flex items-start gap-4 border-b border-gray-200 pb-4 last:border-0">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-[#900]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{certificate.name}</h3>
                    <p className="text-sm text-gray-600">Issued by {certificate.issuer}</p>
                    <p className="text-sm text-gray-500">{certificate.date}</p>
                    <a href={certificate.url} className="text-sm text-[#900] hover:text-[#700] mt-1 inline-block">
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}