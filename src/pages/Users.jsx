import { Routes, Route, Link, useLocation } from "react-router-dom"
import { FaUsers, FaUserTie, FaUserShield } from "react-icons/fa"

function Tenants() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Tenants Management</h2>
      <div className="border rounded-lg p-4">
        <p className="text-gray-600">Tenant content will be implemented here</p>
      </div>
    </div>
  )
}

function Staff() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
      <div className="border rounded-lg p-4">
        <p className="text-gray-600">Staff content will be implemented here</p>
      </div>
    </div>
  )
}

function Roles() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Role Management</h2>
      <div className="border rounded-lg p-4">
        <p className="text-gray-600">Roles content will be implemented here</p>
      </div>
    </div>
  )
}

export default function Users() {
  const location = useLocation()

  const navItems = [
    { path: "tenants", label: "Tenants", icon: <FaUsers /> },
    { path: "staff", label: "Staff", icon: <FaUserTie /> },
    { path: "roles", label: "Roles", icon: <FaUserShield /> },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <nav className="border-b">
          <ul className="flex">
            {navItems.map(({ path, label, icon }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center space-x-2 px-6 py-4 hover:bg-gray-50 border-b-2 ${
                    location.pathname.includes(path)
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="tenants" element={<Tenants />} />
        <Route path="staff" element={<Staff />} />
        <Route path="roles" element={<Roles />} />
      </Routes>
    </div>
  )
}
