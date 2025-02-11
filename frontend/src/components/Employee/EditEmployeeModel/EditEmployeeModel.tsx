import React, { useState, useEffect } from "react";
import CancelButtonImage from "../../../assets/Icons/Cancel button.png";
import Avatar1 from "../../../assets/Avatars/Avatar1.png";
import Avatar2 from "../../../assets/Avatars/Avatar2.png";
import Avatar3 from "../../../assets/Avatars/Avatar3.png";
import Avatar4 from "../../../assets/Avatars/Avatar4.png";
import Avatar5 from "../../../assets/Avatars/Avatar5.png";
import Avatar6 from "../../../assets/Avatars/Avatar6.png";
import Avatar7 from "../../../assets/Avatars/Default.png";
import "./EditEmployeeModel.css";
import { fetchEmployeeById, updateEmployee } from "../../../Helpers/api";
import { toast } from "react-toastify";

interface EditEmployeeModelProps {
  isOpen: boolean;
  onClose: () => void;
  employeeId: number | null;
}

const avatarFileNameMapping: { [key: string]: string } = {
  [Avatar1]: "Avatar1.png",
  [Avatar2]: "Avatar2.png",
  [Avatar3]: "Avatar3.png",
  [Avatar4]: "Avatar4.png",
  [Avatar5]: "Avatar5.png",
  [Avatar6]: "Avatar6.png",
  [Avatar7]: "Default.png",
};

const EditEmployeeModel: React.FC<EditEmployeeModelProps> = ({ isOpen, onClose, employeeId }) => {
  const [step, setStep] = useState(1);
  const [employee, setEmployee] = useState<{
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
  }>({
    id: 0,
    firstName: "",
    lastName: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, [employeeId]);
  
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      if (employeeId) {
        try {
          const data = await fetchEmployeeById(employeeId);
          setEmployee(data);
        } catch (error) {
          toast.error("Failed to fetch employee details.");
        }
      }
    };

    fetchEmployeeDetails();
  }, [employeeId]);

  const handleSave = async () => {
    if (!employeeId) {
      toast.error("Employee ID is missing");
      return;
    }
    const avatarFileName = avatarFileNameMapping[employee.avatar] || "";

    const updatedEmployeeData = {
      id: employeeId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      avatar: avatarFileName,
    };

    try {
      setLoading(true);
      await updateEmployee(employeeId, updatedEmployeeData);
      toast.success("Employee updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update employee. Please try again.");
    } finally {
      setLoading(false);
      setStep(1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="model-overlay">
      <div className="model-container">
        <div className="model-header">
          {step > 1 && (
            <button className="back-arrow-btn" onClick={() => setStep(1)}>
              ←
            </button>
          )}
          <h2 className="model-title">Edit Staff Member</h2>
          <button className="model-close-btn" onClick={onClose}>
            <img src={CancelButtonImage} alt="Cancel" className="cancel-icon" />
          </button>
        </div>

        {step === 1 && (
          <>
            <form className="model-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="First Name"
                className="model-input"
                value={employee.firstName}
                onChange={(e) =>
                  setEmployee({ ...employee, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="model-input"
                value={employee.lastName}
                onChange={(e) =>
                  setEmployee({ ...employee, lastName: e.target.value })
                }
              />
              <div className="step-indicator">
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
              <button
                type="button"
                className="model-submit-btn"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <p className="model-subtitle">Avatar</p>
            <div className="avatar-selection">
              {[Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7].map(
                (avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className={`avatar ${
                      employee.avatar === avatar ? "selected" : ""
                    }`}
                    onClick={() =>
                      setEmployee({ ...employee, avatar: avatar })
                    }
                  />
                )
              )}
            </div>
            <div className="step-indicator">
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
            <button
              type="button"
              className="model-submit-btn"
              onClick={handleSave}
              disabled={loading || !employee.avatar}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditEmployeeModel;
