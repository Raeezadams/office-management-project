import React, { useEffect, useState } from 'react';
import { fetchOffices } from '../../Helpers/api';
import './LandingPage.css';
import OfficeCard from '../../components/Office/OfficeCard/OfficeCard';
import Spinner from '../../components/Spinner/Spinner';

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
        setOffices(Array.isArray(officeData) ? officeData : []);
      } catch (error) {
        console.error('Failed to fetch offices:', error);
        setOffices([]);
      } finally {
        setLoading(false);
      }
    };

    getOffices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spinner /> 
      </div>
    );
  }

  return (

    <div className="landing-page">
      
      <h1 className="heading">All Offices</h1>
      
      <div className='office-list'>
        {offices.map((office) => (
          <OfficeCard
            key={office.id}
            id={office.id}
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
