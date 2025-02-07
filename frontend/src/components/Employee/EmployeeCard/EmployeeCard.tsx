import React from 'react';

interface EmployeeCardProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  employeeId: number; 
  onActionsClick: (employeeId: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ firstName, lastName, avatar, employeeId, onActionsClick }) => {
  const getAvatarPath = (avatar: string | undefined): string => {
    return `/Avatars/${avatar || 'Default.png'}`;
  };

  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <img
          src={getAvatarPath(avatar)}
          className="w-10 h-10 rounded-full object-cover"
          alt={`${firstName} ${lastName}`}
        />
        <p className="text-sm font-medium text-gray-800">{`${firstName} ${lastName}`}</p>
      </div>
      <button className="text-black hover:text-blue-500 text-lg" onClick={() => onActionsClick(employeeId)}>⋮</button>
    </li>
  );
};

export default EmployeeCard;
