import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/doctors?location=${location}&specialization=${specialization}`);
  };

  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl mb-6 font-bold">Your home for health</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded text-black"
        />
        <input
          type="text"
          placeholder="Search Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button onClick={handleSearch} className="bg-white text-blue-900 px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
}
