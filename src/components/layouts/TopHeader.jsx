import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaSearch, FaGlobe, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function TopHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const profileRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#017ebe] via-[#0099ca] to-[#01adcc] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo-text.png" alt="Logo" className="h-11" />
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

        {/* Language, Notifications, Profile */}
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
                    setCurrentLang("en");
                    setIsLangOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setCurrentLang("ar");
                    setIsLangOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
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
                src="/profile.jpeg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/32";
                }}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaUser className="mr-2" />
                  Profile
                </Link>
                <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
