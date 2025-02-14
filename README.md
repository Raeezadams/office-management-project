# Office Management Application

## Overview
The **Office Management Application** allows users to efficiently manage offices and their employees. Key features include:
- Add, view, update, and delete offices and employees.
- Real-time employee search within offices.
- Responsive design for mobile-first usage.

---

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#-api-endpoints)
- [Deployment](#deployment)
- [Additional Resources](#-additional-resources)
- [Bonus Points](#-bonus-points)
- [Acknowledgements](#-acknowledgements)


---

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [.NET SDK](https://dotnet.microsoft.com/) (v8 or higher)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

## Backend Setup

1. **Configure SQL Server Connection**
   - Open the `appsettings.json` file.
   - Update the connection string with your SQL Server details:
     ```json
     "ConnectionStrings": {
         "DefaultConnection": "Data Source=YOUR_SERVER\\YOUR_INSTANCE;Initial Catalog=YOUR_DATABASE;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
     }
     ```

2. **Apply Database Migrations**
   ```bash
   dotnet ef database update
🚀 Backend Setup
1️⃣ Run the Backend
Run the following command to start the backend server:

```bash
dotnet run
```
🌐 The backend API will be available at: https://localhost:5001.

## Frontend Setup

1️⃣ **Navigate to the Frontend Directory**  
   Move to the frontend folder:
   ```bash
   cd frontend
   ```
   
2️⃣ Install Dependencies

Install all required Node.js packages:
```
npm install
```
3️⃣ Start the Development Server
Run the React development server:

```
npm start
```

🌐 The Frontend
The frontend will be available at: http://localhost:3000.

### 🔗 API Endpoints
Here are some key API endpoints for testing:

| **Action**                | **Method** | **Endpoint**                           |
|---------------------------|------------|----------------------------------------|
| Get All Offices           | `GET`      | `/api/offices/GetAllOffices`           |
| Add a New Employee        | `POST`     | `/api/employee/AddEmployee`            |
| Update Office Details      | `PUT`      | `/api/offices/UpdateOffice/{id}`       |
| Delete an Employee         | `DELETE`   | `/api/employee/DeleteEmployee/{id}`    |

💡 **Tip:** Use [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/) to test these endpoints.


## Deployment

This application is hosted on a free Amazon EC2 instance and served via IIS.
You can access the application by clicking [View Here](http://13.51.70.13:8080/).

**Environment Details:**
- **Platform:** Free Amazon EC2 instance
- **Server Software:** IIS (Internet Information Services)
- **.NET Version:** .NET 8
- **OS:** Windows Server (version if known, e.g., 2019 or 2022)

**Note:**  
Due to the limitations of the free tier, the instance may have resource constraints and occasional performance limitations. The IIS configuration is set up to run the application with "No Managed Code" in the application pool, and necessary modules (like the ASP.NET Core Module) have been installed.

For any updates or redeployment, please ensure that the EC2 instance has the latest .NET 8 Hosting Bundle installed and that the IIS settings match those required by the application.


## 📚 Additional Resources

- **Figma Design**: [View Here](https://www.figma.com/design/zjxFBi6BYz33lIOvm0kufG/Intermediate-Tech-Assessment?node-id=2-2&p=f&t=Q681M0em1as3Mfjg-0)

---

## 🏆 Bonus Points

✅ **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices.  
✅ **Modular Architecture**: Reusable components and services for a scalable codebase.  
✅ **Deployment Ready**: Clear instructions for hosting and testing make deployment a breeze.

## 🙌 Acknowledgements

This application was developed as part of the **Specno Technical Assessment**.  
Thank you for the opportunity to showcase my skills!


