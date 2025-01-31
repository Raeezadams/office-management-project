import React, { useState } from 'react';
import './OfficeCard.css';

interface OfficeCardProps {
  name: string;
  staffCount: number;
  color: string;
  address?: string;
  email?: string;
  phone?: string;
  capacity?: number;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  name,
  staffCount,
  color,
  address,
  email,
  phone,
  capacity,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="office-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="office-card-header">
        <div>
          <h2 className="office-name">{name}</h2>
          <p className="office-staff">{staffCount} Staff Members in Office</p>
        </div>
        <button
          className="toggle-info-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? '▲' : 'More info▼'}
        </button>
      </div>
      {showInfo && (
        <div className="office-card-details">
          <p>📞 {phone}</p>
          <p>📧 {email}</p>
          <p>👥 Office Capacity: {capacity}</p>
          <p>📍 {address}</p>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
