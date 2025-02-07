import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneIcon from "../../../assets/Icons/Phone.png"; 
import EmailIcon from "../../../assets/Icons/Email.png";
import AddressIcon from "../../../assets/Icons/location.png";
import CapacityIcon from "../../../assets/Icons/location.png";
import editIcon from "../../../assets/Icons/Edit - 3.png";
import staffIcon from "../../../assets/Icons/StaffCount.png";
import "./OfficeCard.css";

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

  const handleEditOffice = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/edit-office/${id}`);
  };

  const toggleMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowInfo((prev) => !prev);
  };

  return (
    <div
      className="office-card"
      style={{ "--primary-color": color } as React.CSSProperties}
      onClick={handleCardClick}
    >
    <div className="office-card-header">
      <div>
        <h2 className="office-name">{name}</h2>
          <p className="office-staff">
            <img
              src={staffIcon}
              alt="Staff Icon"
              className="staff-icon"/>{" "}
              {staffCount} Staff Members in Office
          </p>
        </div>
        <button className="edit-btn" onClick={handleEditOffice}>
        <img src={editIcon} alt="Edit" />
        </button>
      </div>
      <hr className="divider" />
      <button className="toggle-info-btn" onClick={toggleMoreInfo}>
        {showInfo ? "∧ Hide info" : "More info ∨"}
      </button>
      {showInfo && (
        <div className="office-card-details">
          <p>
            <img src={PhoneIcon} alt="Phone" />
            {phone || "N/A"}
          </p>
          <p>
            <img src={EmailIcon} alt="Email" />
            {email || "N/A"}
          </p>
          <p>
            <img src={CapacityIcon} alt="Capacity" />
            {maxCapacity ? `${maxCapacity} Capacity` : "N/A"}
          </p>
          <p>
            <img src={AddressIcon} alt="Address" />
            {address || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
