import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaGlobe,
  FaCog,
  FaHome,
  FaUsers,
  FaMoneyBillWave,
  FaUserTie,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const menuItems = [
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
        { title: "Documents", path: "/owner/documents" },
        { title: "Contracts", path: "/owner/contracts" },
      ],
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/users",
      submenu: [
        { title: "Tenants", path: "/users/tenants" },
        { title: "Staff", path: "/users/staff" },
        { title: "Roles", path: "/users/roles" },
      ],
    },
    {
      title: "Financials",
      icon: <FaMoneyBillWave />,
      path: "/financials",
      submenu: [
        { title: "Invoices", path: "/financials/invoices" },
        { title: "Payments", path: "/financials/payments" },
        { title: "Reports", path: "/financials/reports" },
      ],
    },
    {
      title: "HR",
      icon: <FaUserTie />,
      path: "/hr",
      submenu: [
        { title: "Employees", path: "/hr/employees" },
        { title: "Payroll", path: "/hr/payroll" },
        { title: "Leave", path: "/hr/leave" },
      ],
    },
  ]

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-white text-2xl font-bold">MANZIL ERP</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="text-white hover:bg-blue-700 p-3 rounded-full">
              <FaBell className="h-7 w-7" />
            </button>

            {/* Language Selector */}
            <button className="flex items-center text-white hover:bg-blue-700 px-4 py-2 rounded-lg">
              <FaGlobe className="h-6 w-6 mr-2" />
              <span className="text-lg">EN</span>
            </button>

            {/* User Profile */}
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-haspopup="true"
                aria-expanded={isProfileOpen}
              >
                <img src="/placeholder.svg?height=40&width=40" alt="User" className="h-10 w-10 rounded-full" />
                <FaChevronDown className="h-5 w-5 ml-2" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FaUser className="inline-block mr-2" />
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FaCog className="inline-block mr-2" />
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <FaSignOutAlt className="inline-block mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="px-4 pb-3">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  to={item.path}
                  className="text-white hover:bg-blue-700 px-4 py-3 rounded-lg inline-flex items-center text-lg"
                >
                  <span className="mr-2 text-xl">{item.icon}</span>
                  {item.title}
                  <FaChevronDown className="h-5 w-5 ml-2" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

