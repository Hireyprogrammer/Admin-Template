import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FaBell,
  FaSearch,
  FaGlobe,
  FaCog,
  FaHome,
  FaUsers,
  FaMoneyBillWave,
  FaUserTie,
  FaUser,
  FaSignOutAlt,
  FaBuilding,
  FaClipboard,
  FaTachometerAlt,
} from "react-icons/fa"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [currentLang, setCurrentLang] = useState('en')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const profileRef = useRef(null)
  const langRef = useRef(null)
  const dropdownRefs = useRef({})

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
      if (!Object.values(dropdownRefs.current).some(ref => ref && ref.contains(event.target))) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
    {
      title: "Financials",
      icon: <FaMoneyBillWave />,
      path: "/financials",
      submenu: [
        { title: "Overview", path: "/financials/overview" },
        { title: "Transactions", path: "/financials/transactions" },
        { title: "Reports", path: "/financials/reports" },
      ],
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header with Gradient */}
      <div className="bg-gradient-to-r from-[#017ebe] via-[#0099ca] to-[#01adcc] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="/logo-vertical.png" alt="Logo" className="h-12 w-32 object-contain" />
            </Link>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-lg bg-white/10 focus:bg-white/20 focus:outline-none placeholder-white/70"
              />
              <FaSearch className="absolute left-2 top-2 text-white/70" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 rounded-lg px-2 py-1"
              >
                <FaGlobe className="w-5 h-5" />
                <span className="uppercase">{currentLang}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                  <button
                    onClick={() => {
                      setCurrentLang('en')
                      setIsLangOpen(false)
                    }}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="English"
                      className="w-5 h-4 mr-2"
                    />
                    English
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang('ar')
                      setIsLangOpen(false)
                    }}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src="https://flagcdn.com/w20/sa.png"
                      alt="Arabic"
                      className="w-5 h-4 mr-2"
                    />
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button className="p-2 hover:bg-white/10 rounded-full relative">
              <FaBell />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 rounded-lg px-2 py-1"
              >
                <img
                  src="/avatar.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/32"
                  }}
                />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FaUser className="mr-2" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {/* Handle logout */}}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation with White Background */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div
                key={item.title}
                className="relative"
                ref={(el) => (dropdownRefs.current[index] = el)}
              >
                {item.submenu ? (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 ${
                      location.pathname.startsWith(item.path)
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 ${
                      location.pathname === item.path
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}

                {item.submenu && activeDropdown === index && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
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
    </nav>
  )
}
