import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search?location=${location}&specialty=${specialty}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">Find the Right Doctor</h1>
      <input
        type="text"
        placeholder="Location"
        className="border p-2 m-2 w-64"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Specialty"
        className="border p-2 m-2 w-64"
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Search
      </button>
    </div>
  );
}
