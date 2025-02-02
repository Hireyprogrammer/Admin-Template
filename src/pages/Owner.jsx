import { Routes, Route, Link } from "react-router-dom"

function PropertyList() {
  return <h2>Property List</h2>
}

function Documents() {
  return <h2>Documents</h2>
}

function Contracts() {
  return <h2>Contracts</h2>
}

export default function Owner() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Owner</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="property-list" className="text-blue-600 hover:underline">
              Property List
            </Link>
          </li>
          <li>
            <Link to="documents" className="text-blue-600 hover:underline">
              Documents
            </Link>
          </li>
          <li>
            <Link to="contracts" className="text-blue-600 hover:underline">
              Contracts
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="property-list" element={<PropertyList />} />
        <Route path="documents" element={<Documents />} />
        <Route path="contracts" element={<Contracts />} />
      </Routes>
    </div>
  )
}

