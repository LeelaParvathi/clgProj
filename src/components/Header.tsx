import React from 'react';

export function Header() {
  return (
    <section className="bg-white py-2">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <a href="index.php">
          <img
            src="https://www.rgukt.in/images/Logonew.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
        </a>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-red-800">
            Rajiv Gandhi University of Knowledge Technologies-Andhra Pradesh
          </h1>
          <p className="text-sm md:text-base text-blue-800 font-semibold">
            Accredited by <strong>'NAAC'</strong> with <strong>'B+'</strong> Grade
          </p>
          <p className="text-xs md:text-sm text-red-700">
            (Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f), 12(B) of UGC Act, 1956)
          </p>
        </div>
      </div>
    </section>
  );
} 
