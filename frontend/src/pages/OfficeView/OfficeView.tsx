import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEmployees, fetchOffices } from "../../Helpers/api";
import EmployeeCard from "../../components/Employee/EmployeeCard/EmployeeCard";
import Spinner from "../../components/Spinner/Spinner";
import OfficeDetails from "../../components/Office/OfficeDetials/OfficeDetails";
import "./OfficeView.css"

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

interface Office {
  id: number;
  name: string;
  staffCount: number;
  color: string;
  phone?: string;
  email?: string;
  maxCapacity?: number;
  address?: string;
}

const OfficeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [officeData, employeesData] = await Promise.all([
          fetchOffices().then((offices) =>
            offices.find((o: Office) => o.id === Number(id))
          ),
          fetchEmployees(Number(id)),
        ]);
        setOffice(officeData || null);
        setEmployees(employeesData || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between bg-white shadow p-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ←
        </button>
        <h1 className="text-lg font-bold">Office</h1>
        <div />
      </div>

      {/* Office Details */}
      {office && (
        <div className="p-4">
          <OfficeDetails
            name={office.name}
            staffCount={office.staffCount}
            color={office.color}
            phone={office.phone}
            email={office.email}
            maxCapacity={office.maxCapacity}
            address={office.address}
          />
        </div>
      )}

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <img
            src="/Icons/SearchIcon.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 mb-4 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        {/* Staff Members Heading */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800 pl-1">
            Staff Members In Office
          </h2>
          <span className="text-xl text-black font-medium pr-3">
            {employees.length}
          </span>
        </div>
      </div>

      {/* Employee List */}
      <ul className="space-y-2 px-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            avatar={employee.avatar}
          />
        ))}
      </ul>
    </div>
  );
};

export default OfficeView;
