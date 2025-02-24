import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { 
  Users, 
  Calendar, 
  Trophy,
  Settings,
  Bell,
  LogOut,
  Plus,
  Edit,
  Trash2,
  ChevronRight,
  Image,
  MessageSquare,
  School,
  Medal,
  FileText
} from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  status: 'upcoming' | 'completed';
}

interface Staff {
  id: string;
  name: string;
  role: string;
  campus: string;
  department: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  date: string;
  status: 'unread' | 'read';
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Inter-University Sports Meet',
      date: '2024-04-15',
      venue: 'Main Stadium',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Annual Sports Day',
      date: '2024-05-01',
      venue: 'University Ground',
      status: 'upcoming'
    }
  ]);

  const [staff, setStaff] = useState<Staff[]>([
    {
      id: '1',
      name: 'Dr. John Smith',
      role: 'Head of Department',
      campus: 'Main Campus',
      department: 'Physical Education'
    },
    {
      id: '2',
      name: 'Prof. Sarah Johnson',
      role: 'Sports Coordinator',
      campus: 'City Campus',
      department: 'Physical Education'
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      subject: 'Sports Equipment Query',
      date: '2024-03-15',
      status: 'unread'
    },
    {
      id: '2',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      subject: 'Tournament Registration',
      date: '2024-03-14',
      status: 'read'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#900]">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">Admin</span>
            </div>
            <button className="flex items-center gap-2 bg-[#900] text-white px-4 py-2 rounded-lg hover:bg-[#700] transition-colors">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="grid grid-cols-7 gap-4 mb-6">
          {[
            { id: 'dashboard', icon: <Users className="w-5 h-5" />, label: 'Dashboard' },
            { id: 'events', icon: <Calendar className="w-5 h-5" />, label: 'Events' },
            { id: 'staff', icon: <Users className="w-5 h-5" />, label: 'Staff' },
            { id: 'achievements', icon: <Trophy className="w-5 h-5" />, label: 'Achievements' },
            { id: 'gallery', icon: <Image className="w-5 h-5" />, label: 'Gallery' },
            { id: 'messages', icon: <MessageSquare className="w-5 h-5" />, label: 'Messages' },
            { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#900] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#900]">Total Staff</h3>
                  <Users className="w-6 h-6 text-[#900]" />
                </div>
                <p className="text-3xl font-bold">{staff.length}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#900]">Upcoming Events</h3>
                  <Calendar className="w-6 h-6 text-[#900]" />
                </div>
                <p className="text-3xl font-bold">
                  {events.filter(e => e.status === 'upcoming').length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#900]">Unread Messages</h3>
                  <Bell className="w-6 h-6 text-[#900]" />
                </div>
                <p className="text-3xl font-bold">
                  {messages.filter(m => m.status === 'unread').length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#900]">Active Users</h3>
                  <Users className="w-6 h-6 text-[#900]" />
                </div>
                <p className="text-3xl font-bold">124</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#900] mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#900]" />
                  <div>
                    <p className="font-medium">New event created</p>
                    <p className="text-sm text-gray-600">Inter-University Sports Meet was added to the calendar</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-[#900]" />
                  <div>
                    <p className="font-medium">New staff member added</p>
                    <p className="text-sm text-gray-600">Prof. Sarah Johnson joined as Sports Coordinator</p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-[#900]" />
                  <div>
                    <p className="font-medium">New message received</p>
                    <p className="text-sm text-gray-600">Sports Equipment Query from Alex Johnson</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Management */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#900]">Events Management</h2>
              <button className="flex items-center gap-2 bg-[#900] text-white px-4 py-2 rounded-lg hover:bg-[#700] transition-colors">
                <Plus className="w-4 h-4" />
                Add Event
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Venue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.venue}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          event.status === 'upcoming' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Staff Management */}
        {activeTab === 'staff' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#900]">Staff Management</h2>
              <button className="flex items-center gap-2 bg-[#900] text-white px-4 py-2 rounded-lg hover:bg-[#700] transition-colors">
                <Plus className="w-4 h-4" />
                Add Staff
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campus
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {staff.map((member) => (
                    <tr key={member.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.campus}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{member.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#900] mb-6">Messages</h2>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg ${
                    message.status === 'unread' ? 'bg-blue-50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{message.name}</h3>
                      <p className="text-sm text-gray-600">{message.email}</p>
                      <p className="text-sm font-medium mt-2">{message.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{message.date}</p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                          message.status === 'unread'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#900] mb-6">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <h3 className="font-medium">Profile Settings</h3>
                  <p className="text-sm text-gray-500">Update your admin profile information</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <h3 className="font-medium">Notification Preferences</h3>
                  <p className="text-sm text-gray-500">Manage your notification settings</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <h3 className="font-medium">Security Settings</h3>
                  <p className="text-sm text-gray-500">Update password and security preferences</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div>
                  <h3 className="font-medium">Campus Management</h3>
                  <p className="text-sm text-gray-500">Manage multiple campus settings</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default AdminDashboard;