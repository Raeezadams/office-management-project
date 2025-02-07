import React, { useState } from "react";
import CancelButtonImage from "../../../assets/Icons/Cancel button.png";
import Avatar1 from "../../../assets/Avatars/Avatar1.png";
import Avatar2 from "../../../assets/Avatars/Avatar2.png";
import Avatar3 from "../../../assets/Avatars/Avatar3.png";
import Avatar4 from "../../../assets/Avatars/Avatar4.png";
import Avatar5 from "../../../assets/Avatars/Avatar5.png";
import Avatar6 from "../../../assets/Avatars/Avatar6.png";
import Avatar7 from "../../../assets/Avatars/Default.png";
import "./AddEmployeeModel.css";
import { addEmployee } from "../../../Helpers/api";
import { toast } from "react-toastify";

interface AddEmployeeModelProps {
  isOpen: boolean;
  onClose: () => void;
  officeId: number; 
}

const AddEmployeeModel: React.FC<AddEmployeeModelProps> = ({ isOpen, onClose, officeId }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); 

  const resetState = () => {
    setStep(1);
    setFirstName("");
    setLastName("");
    setSelectedAvatar(null);
    onClose();
  };

  const handleSubmit = async () => {
    if (!selectedAvatar || !firstName || !lastName) {
      toast.info("Please fill out all fields and select an avatar.");
      return;
    }
    const avatarFileName = selectedAvatar.split("/").pop() || "" ;

    const employeeData = {
      firstName,
      lastName,
      avatar: avatarFileName,
      officeId, 
    };

    try {
      setLoading(true);
      await addEmployee(employeeData); 
      toast.success("Employee added successfully!");
      resetState();
    } catch (error: any) {
      toast.error("Failed to add employee. Please try again.");
    } finally {
      setLoading(false);
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
          <h2 className="model-title">New Staff Member</h2>
          <button className="model-close-btn" onClick={resetState}>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="model-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                NEXT
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <p className="model-subtitle">Avatar</p>
            <div className="avatar-selection">
              {[Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7].map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className={`avatar ${selectedAvatar === avatar ? "selected" : ""}`}
                  onClick={() => setSelectedAvatar(avatar)}
                />
              ))}
            </div>
            <div className="step-indicator">
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
            <button
              type="button"
              className="model-submit-btn"
              onClick={handleSubmit}
              disabled={loading || !selectedAvatar}
            >
              {loading ? "Adding..." : "ADD STAFF MEMBER"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddEmployeeModel;
