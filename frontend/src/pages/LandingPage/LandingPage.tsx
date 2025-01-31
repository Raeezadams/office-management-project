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
  capacity?: number;
  address?: string;
}

const LandingPage: React.FC = () => {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOffices = async () => {
      try {
        const officeData = await fetchOffices();
        setOffices(officeData);
      } catch (error) {
        console.error('Failed to fetch offices:', error);
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
      <div>
        {offices.map((office) => (
          <OfficeCard
            key={office.id}
            name={office.name}
            staffCount={office.staffCount}
            color={office.color || '#1D4ED8'}
            phone={office.phone}
            email={office.email}
            capacity={office.capacity}
            address={office.address}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
