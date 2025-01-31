import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import OfficeView from '../pages/OfficeView/OfficeView';
import AddOfficePage from '../pages/AddOfficePage/AddOfficePage';
import EditOfficePage from '../pages/EditOfficePage/EditOfficePage';
import AddStaffPage from '../pages/AddStaffPage/AddStaffPage';
import EditStaffPage from '../pages/EditStaffPage/EditStaffPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/office/:id" element={<OfficeView />} />
      <Route path="/add-office" element={<AddOfficePage />} />
      <Route path="/edit-office/:id" element={<EditOfficePage />} />
      <Route path="/add-staff" element={<AddStaffPage />} />
      <Route path="/edit-staff/:id" element={<EditStaffPage />} />
    </Routes>
  );
};

export default AppRoutes;
