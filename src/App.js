import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Employee from './pages/Employee';
import Appointments from './pages/Appointments';
import MyView from './pages/MyView';
import Billing from './pages/Billing';
import Payroll from './pages/Payroll';
import RoleNavigation from './pages/RoleNavigation';
import Settings from './pages/Settings';
import Upgrade from './pages/Upgrade';
import Support from './pages/Support';
import Reports from './pages/Reports';
import Header from './Common/Header';
import Sidebar from './Common/Sidebar';




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="dashboard-container">
          <Sidebar />
          <div className='dashboard-main'>
          <Routes>
            <Route path="/" exact element={<Dashboard/>} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/employee" element={<Employee/>} />
            <Route path="/appointments" element={<Appointments/>} />
            <Route path="/myview" element={<MyView/>} />
            <Route path="/billing" element={<Billing/>} />
            <Route path="/payroll" element={<Payroll/>} />
            <Route path="/rolenavigation" element={<RoleNavigation/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/upgrade" element={<Upgrade/>} />
            <Route path="/support" element={<Support/>} />

          </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
