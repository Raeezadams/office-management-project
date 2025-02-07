import React from "react";
import "./EmployeeActionsModel.css";

interface EmployeeActionsModelProps {
  isOpen: boolean;
  onClose: () => void;
  employeeId: number; 
  onEdit: (employeeId: number) => void; 
  onDelete: (employeeId: number) => void; 
}

const EmployeeActionsModel: React.FC<EmployeeActionsModelProps> = ({
  isOpen,
  onClose,
  employeeId,
  onEdit,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="model-overlay">
      <div className="model-container">
        <h2 className="model-title"></h2>
        <div className="action-buttons">
          {/* Edit Button */}
          <button
            className="edit-button"
            onClick={() => {
              onEdit(employeeId);
              onClose();
            }}
          >
            EDIT STAFF MEMBER
          </button>
          {/* Delete Button */}
          <button
            className="delete-button"
            onClick={() => {
              onDelete(employeeId);
              onClose(); 
            }}
          >
            DELETE STAFF MEMBER
          </button>
        </div>
        {/* Close Button */}
        <button className="model-close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default EmployeeActionsModel;
