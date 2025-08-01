import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  location: string;
  experience: number;
};

export default function SearchResults() {
  const router = useRouter();
  const { location, specialty } = router.query;
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    if (location && specialty) {
      fetch(
        `http://localhost:5000/api/doctors?location=${location}&specialty=${specialty}`
      )
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }
  }, [location, specialty]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Doctors in {location} for {specialty}
      </h2>
      <div className="grid gap-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{doc.name}</h3>
            <p>{doc.specialty} · {doc.experience} years experience</p>
            <p>{doc.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
