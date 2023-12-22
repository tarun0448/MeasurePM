import React, { useState } from 'react';
import SidebarTab from '../components/SidebarTab';
import dashboardIcon from "../assets/mpm-sidebar-icons/nav-item-button-1.svg"
import clientsIcon from "../assets/mpm-sidebar-icons/nav-item-button-2.svg"
import employeeIcon from "../assets/mpm-sidebar-icons/nav-item-button-3.svg"
import appointmentsIcon from "../assets/mpm-sidebar-icons/nav-item-button-4.svg"
import myViewIcon from "../assets/mpm-sidebar-icons/nav-item-button-5.svg"
import billingIcon from "../assets/mpm-sidebar-icons/nav-item-button-6.svg"
import payrollIcon from "../assets/mpm-sidebar-icons/nav-item-button-7.svg"
import roleNavigationIcon from "../assets/mpm-sidebar-icons/nav-item-button-8.svg"
import settingIcon from "../assets/mpm-sidebar-icons/nav-item-button-9.svg"
import reportIcon from "../assets/mpm-sidebar-icons/nav-item-button-10.svg"
import upgradeIcon from "../assets/mpm-sidebar-icons/nav-item-button-11.svg"
import supportIcon from "../assets/mpm-sidebar-icons/nav-item-button-12.svg"



const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (title) => {
    setActiveTab(title);
    // Handle tab click functionality here (e.g., navigate to different views)
  };

  return (
    <div className="sidebar">
      <ul className='sidebar-tabs'>
        <SidebarTab
          title="Dashboard"
          onClick={() => handleTabClick('Dashboard')}
          active={activeTab === 'Dashboard'}
          icon={dashboardIcon}
          path={'/'}
        />
        <SidebarTab
          title="Clients"
          onClick={() => handleTabClick('Clients')}
          active={activeTab === 'Clients'}
          icon={clientsIcon}
          path={'/clients'}

        />
        <SidebarTab
          title="Employee"
          onClick={() => handleTabClick('Employee')}
          active={activeTab === 'Employee'}
          icon={employeeIcon}
          path={'/employee'}

        />
        <SidebarTab
          title="Appointments"
          onClick={() => handleTabClick('Appointments')}
          active={activeTab === 'Appointments'}
          icon={appointmentsIcon}
          path={'/appointments'}
        />
        <SidebarTab
          title="My View"
          onClick={() => handleTabClick('My View')}
          active={activeTab === 'My View'}
          icon={myViewIcon}
          path={'/myview'}

        />
        <SidebarTab
          title="Billing"
          onClick={() => handleTabClick('Billing')}
          active={activeTab === 'Billing'}
          icon={billingIcon}
          path={'/billing'}

        />
        <SidebarTab
          title="Payroll"
          onClick={() => handleTabClick('Payroll')}
          active={activeTab === 'Payroll'}
          icon={payrollIcon}
          path={'/payroll'}

        />
        <SidebarTab
          title="Role Navigation"
          onClick={() => handleTabClick('Role Navigation')}
          active={activeTab === 'Role Navigation'}
          icon={roleNavigationIcon}
          path={'/rolenavigation'}

        />
        <SidebarTab
          title="Settings"
          onClick={() => handleTabClick('Settings')}
          active={activeTab === 'Settings'}
          icon={settingIcon}
          path={'/settings'}

        />
        <SidebarTab
          title="Reports"
          onClick={() => handleTabClick('Reports')}
          active={activeTab === 'Reports'}
          icon={reportIcon}
          path={'/reports'}

        />

      </ul>
      <ul className='sidebar-footer'>
        <SidebarTab
          title="Upgrade"
          onClick={() => handleTabClick('Upgrade')}
          active={activeTab === 'Upgrade'}
          icon={upgradeIcon}
          path={'/upgrade'}

        />
        <SidebarTab
          title="Support"
          onClick={() => handleTabClick('Support')}
          active={activeTab === 'Support'}
          icon={supportIcon}
          path={'/support'}

        />
      </ul>
    </div>
  );
};

export default Sidebar;
