import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOfficeById, updateOffice, deleteOffice } from "../../Helpers/api";
import { toast } from "react-toastify";
import "./EditOfficePage.css";

interface OfficeData {
  id?: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  maxCapacity: number;
  color: string;
}

const EditOfficePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<OfficeData | null>(null);
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

  // Fetch office data on component mount
  useEffect(() => {
    const fetchOfficeData = async () => {
      if (!id || isNaN(Number(id))) {
        toast.error("Invalid office ID.");
        navigate("/");
        return;
      }

      try {
        const officeId = Number(id);
        const office = await fetchOfficeById(officeId);
        if (office) {
          setFormData(office);
          setSelectedColor(office.color);
        }
      } catch (error) {
        console.error("Error fetching office:", error);
        toast.error("Failed to fetch office details.");
        navigate("/");
      }
    };

    fetchOfficeData();
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => (prevData ? { ...prevData, [name]: value } : null));
  };

  const handleColorSelect = (color: string) => {
    setFormData((prevData) => (prevData ? { ...prevData, color } : null));
    setSelectedColor(color);
  };

  // Submit form to update office
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData) {
        const officeId = Number(id);
        await updateOffice(officeId, formData);
        toast.success("Office updated successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating office:", error);
      toast.error("Failed to update office. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete office
  const handleDelete = async () => {

    setLoading(true);
    try {
      const officeId = Number(id);
      await deleteOffice(officeId);
      toast.success("Office deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting office:", error);
      toast.error("Failed to delete office. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="add-office-page">
      <div className="back-button" onClick={() => navigate("/")}>
        ←
      </div>
      <h1 className="page-title">Edit Office</h1>
      <form onSubmit={handleSubmit} className="add-office-form" autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Office Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="address"
          placeholder="Physical Address"
          value={formData.address}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="maxCapacity"
          placeholder="Maximum Capacity"
          value={formData.maxCapacity}
          onChange={handleChange}
          className="input-field"
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
          {loading ? "Updating..." : "Update Office"}
        </button>
        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
          disabled={loading}
        >
          Delete Office
        </button>
      </form>
    </div>
  );
};

export default EditOfficePage;
