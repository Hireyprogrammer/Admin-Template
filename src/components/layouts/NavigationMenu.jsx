import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaCog, FaHome, FaUsers, FaMoneyBillWave, FaUserTie } from "react-icons/fa";

export default function NavigationMenu() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRefs = useRef({});

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
      submenu: [
        { title: "System Config", path: "/settings/system-config" },
        { title: "Preferences", path: "/settings/preferences" },
        { title: "Security", path: "/settings/security" },
      ],
    },
    {
      title: "Owner",
      icon: <FaHome />,
      path: "/owner",
      submenu: [
        { title: "Property List", path: "/owner/property-list" },
        { title: "Add Property", path: "/owner/add-property" },
        { title: "Property Types", path: "/owner/property-types" },
      ],
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/users",
      submenu: [
        { title: "All Users", path: "/users/all" },
        { title: "Add User", path: "/users/add" },
        { title: "User Roles", path: "/users/roles" },
      ],
    },
  ];

  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <div key={item.title} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
              {item.submenu ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  className={`flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 ${
                    location.pathname.startsWith(item.path) ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              ) : (
                <Link to={item.path} className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 text-gray-700">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}

              {item.submenu && activeDropdown === index && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.title} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
