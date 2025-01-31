import React, { useEffect, useState } from 'react';
import { fetchOffices } from '../../Helpers/api';
import './LandingPage.css';
import OfficeCard from '../../components/OfficeCard/OfficeCard';

interface Office {
  id: number;
  name: string;
  staffCount: number;
  color: string;
  phone?: string;
  email?: string;
  maxCapacity?: number;
  address?: string;
}

const LandingPage: React.FC = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOffices = async () => {
      try {
        const officeData = await fetchOffices();
        console.log("Fetched Data:", officeData); // Debugging
  
        // Ensure officeData is an array, fallback to empty array if not
        setOffices(Array.isArray(officeData) ? officeData : []);
      } catch (error) {
        console.error('Failed to fetch offices:', error);
        setOffices([]); // Prevent `map` errors by setting an empty array
      } finally {
        setLoading(false);
      }
    };

    getOffices();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="landing-page">
      <h1 className="heading">All Offices</h1>
      <div className='office-list'>
        {offices.map((office) => (
          <OfficeCard
            key={office.id}
            name={office.name}
            staffCount={office.staffCount}
            color={office.color || '#1D4ED8'}
            phone={office.phone}
            email={office.email}
            maxCapacity={office.maxCapacity}
            address={office.address}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
