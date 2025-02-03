// import React, { useState } from "react";
// import './OfficeDetails.css';

// interface OfficeDetailsProps {
//   name: string;
//   staffCount: number;
//   color: string;
//   phone?: string;
//   email?: string;
//   maxCapacity?: number;
//   address?: string;
// }

// const OfficeDetails: React.FC<OfficeDetailsProps> = ({
//   name,
//   staffCount,
//   color,
//   phone,
//   email,
//   maxCapacity,
//   address,
// }) => {
//   const [showMoreInfo, setShowMoreInfo] = useState(false);

//   const toggleMoreInfo = () => {
//     setShowMoreInfo((prev) => !prev);
//   };

//   return (
//     <div
//       className="office-card"
//       style={{ borderLeft: `12px solid ${color}` }}
//     >
//       <div className="office-card-header">
//         <div>
//           <h2 className="office-name">{name}</h2>
//           <p className="office-staff">👥 {staffCount} Staff Members in Office</p>
//         </div>
//         <button className="edit-btn">✏️</button>
//       </div>
//       <hr className="divider" />
//       <div className="office-card-details">
//         <p>📞 {phone || "N/A"}</p>
//         <p>📧 {email || "N/A"}</p>
//         <p>👥 Office Capacity: {maxCapacity || "N/A"}</p>
//         <p>📍 {address || "N/A"}</p>
//       </div>
//       <button
//         className="toggle-info-btn"
//         onClick={toggleMoreInfo}
//       >
//         {showMoreInfo ? "▲ Hide Info" : "More Info ▼"}
//       </button>
//       {showMoreInfo && (
//         <div className="office-card-extra-info">
//           <p>📞 Detailed Phone: {phone || "Not Available"}</p>
//           <p>📧 Detailed Email: {email || "Not Available"}</p>
//           {/* Add any other detailed information you need */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OfficeDetails;
