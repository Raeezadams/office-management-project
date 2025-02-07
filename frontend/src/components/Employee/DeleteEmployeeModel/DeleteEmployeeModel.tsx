import React, { useState } from "react";
import { toast } from "react-toastify";
import "./DeleteEmployeeModel.css";
import { deleteEmployee } from "../../../Helpers/api"; 

interface DeleteEmployeeModelProps {
  isOpen: boolean;
  onClose: () => void;
  employeeId: number | null;
}

const DeleteEmployeeModel: React.FC<DeleteEmployeeModelProps> = ({
  isOpen,
  onClose,
  employeeId,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!employeeId) {
      toast.error("Employee ID is missing");
      return;
    }

    try {
      setLoading(true);
      await deleteEmployee(employeeId); 
      toast.success("Employee deleted successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to delete employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="model-overlay">
      <div className="model-container">
        <h2 className="model-title">Are You Sure You Want to Delete Staff Member?</h2>
        <div className="action-buttons">
          <button
            className="delete-button1"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "DELETE EMPLOYEE"}
          </button>
          <button className="cancel-button1" onClick={onClose}>
            KEEP EMPLOYEE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployeeModel;
