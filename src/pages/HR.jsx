import { Routes, Route, Link } from "react-router-dom"

function Employees() {
  return <h2>Employees</h2>
}

function Payroll() {
  return <h2>Payroll</h2>
}

function Leave() {
  return <h2>Leave Management</h2>
}

export default function HR() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Human Resources</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="employees" className="text-blue-600 hover:underline">
              Employees
            </Link>
          </li>
          <li>
            <Link to="payroll" className="text-blue-600 hover:underline">
              Payroll
            </Link>
          </li>
          <li>
            <Link to="leave" className="text-blue-600 hover:underline">
              Leave
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="employees" element={<Employees />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="leave" element={<Leave />} />
      </Routes>
    </div>
  )
}

