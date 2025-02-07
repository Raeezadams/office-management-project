import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchOffices } from '../../Helpers/api';
import './LandingPage.css';
import OfficeCard from '../../components/Office/OfficeCard/OfficeCard';
import Spinner from '../../components/Spinner/Spinner';
import AddButtonImage from "../../assets/Icons/AddButton.png"

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
  const navigate = useNavigate();

  const handleAddOffice = () => {
    navigate('/add-office');
  };

  const handleEditOffice = () => {
    navigate(`/edit-office/{officeId}`)
  }

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
    
    <div className="landing-page min-h-screen bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">All Offices</h1>
      </div>

      {/* Office List */}
      <div className="office-list grid gap-4">
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
      <button
          onClick={handleAddOffice}
          className="fixed bottom-8 right-8 bg-blue-500 w-16 h-16 rounded-full shadow-lg flex justify-center items-center hover:bg-blue-600 transition"
        >
          <img
            src={AddButtonImage} // Use the imported image
            alt="Add Office"
            className="h-15 w-15"
          />
        </button>
    </div>
  );
};

export default LandingPage;
