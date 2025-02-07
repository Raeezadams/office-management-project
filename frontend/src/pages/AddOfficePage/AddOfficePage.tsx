import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { createOffice } from "../../Helpers/api";
import { toast } from "react-toastify";
import "./AddOfficePage.css";
import Spinner from "../../components/Spinner/Spinner";

const initialFormData = {
  name: "",
  address: "",
  email: "",
  phone: "",
  maxCapacity: "",
  color: "",
};

const AddOffice = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);

  const colors = [
    "yellow",
    "orange",
    "red",
    "brown",
    "pink",
    "green",
    "blue",
    "purple",
    "violet",
    "teal",
  ];

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleColorSelect = (color : any) => {
    setFormData((prevData) => ({ ...prevData, color }));
    setSelectedColor(color);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await createOffice(formData);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Office created successfully!");

        setFormData(initialFormData);
        setSelectedColor("");
        navigate("/");
      } else {
        toast.error("Unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error creating office:", error);
      toast.error("Failed to create office. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="add-office-page">
      <div className="back-button" onClick={() => navigate("/")}>
        ←
      </div>
      <h1 className="page-title">New Office</h1>
      <form onSubmit={handleSubmit} className="add-office-form">
        <input
          type="text"
          name="name"
          placeholder="Office Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        />
        <input
          type="text"
          name="address"
          placeholder="Physical Address"
          value={formData.address}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        />
        <input
          type="number"
          name="maxCapacity"
          placeholder="Maximum Capacity"
          value={formData.maxCapacity}
          onChange={handleChange}
          className="input-field"
          autoComplete="off"
        />
        <div className="color-selection">
          <h2 className="color-title">Office Colour</h2>
          <div className="color-buttons">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Add Office
        </button>
      </form>
    </div>
  );
};

export default AddOffice;