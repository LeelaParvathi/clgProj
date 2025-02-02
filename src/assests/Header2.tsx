import React from 'react';

export function Header() {
  return (
    <header className="bg-white border-b-2 border-[#a30000] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#a30000]">
            Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
          </h1>
          <h2 className="text-lg mt-2">Nuzvid Campus</h2>
          <p className="text-sm mt-1">Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh</p>
          <p className="text-sm">(Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f) of UGC Act, 1956)</p>
          <p className="text-sm font-semibold mt-1">Accredited by 'NAAC' with 'B+' Grade</p>
        </div>
      </div>
    </header>
  );
}