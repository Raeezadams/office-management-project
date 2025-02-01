import React, { useState } from 'react';
import './OfficeCard.css';

interface OfficeCardProps {
  name: string;
  staffCount: number;
  color: string;
  address?: string;
  email?: string;
  phone?: string;
  maxCapacity?: number;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  name,
  staffCount,
  color,
  address,
  email,
  phone,
  maxCapacity,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="office-card" style={{ borderLeft: `12px solid ${color}` }}>
      <div className="office-card-header">
        <div>
          <h2 className="office-name">{name}</h2>
          <p className="office-staff">👥 {staffCount} Staff Members in Office</p>
        </div>
        <button className="edit-btn">✏️</button>
      </div>
      {/* Horizontal Line */}
      <hr className="divider" />
      <button
        className="toggle-info-btn"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? '▲ Hide info' : 'More info ▼'}
      </button>
      {showInfo && (
        <div className="office-card-details">
          <p>📞 {phone}</p>
          <p>📧 {email}</p>
          <p>👥 Office Capacity: {maxCapacity}</p>
          <p>📍 {address}</p>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
