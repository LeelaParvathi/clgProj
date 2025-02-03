import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { CheckCircle } from 'lucide-react';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '') {
      const nextElement = element.nextElementSibling as HTMLInputElement;
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement OTP verification logic with Supabase
    navigate('/profile'); // Navigate to profile after successful verification
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      
      <div className="max-w-md mx-auto my-16 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-[#900] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#900] mb-2">Verify Your Email</h2>
            <p className="text-gray-600">We've sent a verification code to your email</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                  className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md shadow-sm focus:ring-[#900] focus:border-[#900]"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-[#900] text-white py-2 px-4 rounded-md hover:bg-[#700] transition-colors"
            >
              Verify Email
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button className="text-[#900] hover:text-[#700] font-medium">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}