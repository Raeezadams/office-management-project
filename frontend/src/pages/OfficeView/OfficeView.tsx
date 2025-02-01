import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployees } from '../../Helpers/api';
import "./OfficeView.css";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

const OfficeView: React.FC = () => {
  const {id} = useParams<{id: string }>();
  const [employees, setEmployees] = useState<Employee[]>([]); 
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getEmployees = async () => {
      try { 
        const data = await fetchEmployees(Number(id));
        setEmployees(data)
      }catch(error) {
        console.error("Failed to fetch employees: ", error)
      }finally {
        setLoading(false)
      }
    };

    if (id) {
      getEmployees(); 
    }

  },[id])

  const filteredEmployees = employees.filter((employee) => 
  `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  if(loading){
    return <p className="text-center text-gray-600">Loading...</p>;
  }
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Staff Members In Office</h2>
        <span className="text-sm text-gray-500">{employees.length}</span>
      </div>

      <input
        type="text"
        placeholder="Search employees..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <ul className="space-y-2">
        {filteredEmployees.map((employee) => (
          <li
            key={employee.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <img
                src={employee.avatar || '/default-avatar.png'}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-medium text-gray-800">{`${employee.firstName} ${employee.lastName}`}</p>
            </div>
            <button className="text-gray-500 hover:text-blue-500 text-lg">⋮</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OfficeView;
