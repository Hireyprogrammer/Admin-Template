import { Routes, Route, Link } from "react-router-dom"

function Invoices() {
  return <h2>Invoices</h2>
}

function Payments() {
  return <h2>Payments</h2>
} 

function Reports() {
  return <h2>Financial Reports</h2>
}

export default function Financials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Financials</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="invoices" className="text-blue-600 hover:underline">
              Invoices
            </Link>
          </li>
          <li>
            <Link to="payments" className="text-blue-600 hover:underline">
              Payments
            </Link>
          </li>
          <li>
            <Link to="reports" className="text-blue-600 hover:underline">
              Reports
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="invoices" element={<Invoices />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  )
}

