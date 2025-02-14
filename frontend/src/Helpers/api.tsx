import axios from 'axios';

const API_BASE_URL = 'http://13.51.70.13/api';


export const fetchOffices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/offices/GetAllOffices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching offices:', error);
    throw error;
  }  
};


export const fetchEmployees = async (officeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/GetEmployeesByOffice/${officeId}`)
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    console.error("Failed to fetch employees: ", error);
    throw error
  }
}


export const addEmployee = async (employeeData: {
  firstName: string;
  lastName: string;
  avatar: string;
  officeId: number;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employee/AddEmployee`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

export const fetchOfficeById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/offices/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching office by ID:", error);
    throw error;
  }
};

export const fetchEmployeeById = async (employeeId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/${employeeId}`)
    return response.data
  }catch (error) {
    console.error ("Error fetching employee by ID: ", error )
  }
}

export const updateEmployee = async (
  employeeId: number,
  employeeData: { firstName: string; lastName: string; avatar: string }
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/employee/UpdateEmployee/${employeeId}`,
      employeeData
    );
    return response.data; 
  } catch (error) {
    console.error("Error updating employee: ", error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/employee/DeleteEmployee/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee: ", error);
    throw error;
  }
};

export const createOffice = async (officeData: {
  name : string; 
  address : string;
  email: string;
  phone: string;
  maxCapacity: string;
  color: string;
}) => {
  try {
  const response = await axios.post(`${API_BASE_URL}/offices/CreateOffice`, officeData)
  return response
  } catch (error) {
    console.error("Error creating a new office: ", error)
    throw error
  }
}

export const updateOffice = async (
  officeId: number,
  officeData: {
    name: string;
    address: string;
    email: string;
    phone: string;
    maxCapacity: number;
    color: string;
  }
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/offices/UpdateOffice/${officeId}`,
      officeData
    );
    return response.data;
  } catch (error) {
    console.error('Error updating office:', error);
    throw error;
  }
};



export const deleteOffice = async (officeId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/offices/DeleteOffice/${officeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting office:', error);
    throw error;
  }
};

