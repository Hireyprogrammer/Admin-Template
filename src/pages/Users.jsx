import { Routes, Route, Link } from "react-router-dom"

function Tenants() {
  return <h2>Tenants</h2>
}

function Staff() {
  return <h2>Staff</h2>
}

function Roles() {
  return <h2>Roles</h2>
}

export default function Users() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="tenants" className="text-blue-600 hover:underline">
              Tenants
            </Link>
          </li>
          <li>
            <Link to="staff" className="text-blue-600 hover:underline">
              Staff
            </Link>
          </li>
          <li>
            <Link to="roles" className="text-blue-600 hover:underline">
              Roles
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="tenants" element={<Tenants />} />
        <Route path="staff" element={<Staff />} />
        <Route path="roles" element={<Roles />} />
      </Routes>
    </div>
  )
}

