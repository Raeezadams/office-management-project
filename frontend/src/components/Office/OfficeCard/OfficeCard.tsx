import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfficeCard.css';

interface OfficeCardProps {
  id: number;
  name: string;
  staffCount: number;
  color: string;
  phone?: string;
  email?: string;
  maxCapacity?: number;
  address?: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  id,
  name,
  staffCount,
  color,
  phone,
  email,
  maxCapacity,
  address,
}) => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const handleCardClick = () => {
    navigate(`/office/${id}`); 
  };

  const toggleMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setShowInfo((prev) => !prev); 
  };

  return (
    <div
      className="office-card"
      style={{ borderLeft: `12px solid ${color}` }}
      onClick={handleCardClick} 
    >
      <div className="office-card-header">
        <div>
          <h2 className="office-name">{name}</h2>
          <p className="office-staff">👥 {staffCount} Staff Members in Office</p>
        </div>
        <button
          className="edit-btn"
          onClick={(e) => e.stopPropagation()}
        >
          ✏️
        </button>
      </div>
      <hr className="divider" />
      <button
        className="toggle-info-btn"
        onClick={toggleMoreInfo} 
      >
        {showInfo ? '▲ Hide info' : 'More info ▼'}
      </button>
      {showInfo && (
        <div className="office-card-details">
          <p>📞 {phone || 'N/A'}</p>
          <p>📧 {email || 'N/A'}</p>
          <p>👥 Office Capacity: {maxCapacity || 'N/A'}</p>
          <p>📍 {address || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
