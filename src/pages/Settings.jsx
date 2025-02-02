import { Routes, Route, Link } from "react-router-dom"

function SystemConfig() {
  return <h2>System Configuration</h2>
}

function Preferences() {
  return <h2>User Preferences</h2>
}

function Security() {
  return <h2>Security Settings</h2>
}

export default function Settings() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="system-config" className="text-blue-600 hover:underline">
              System Config
            </Link>
          </li>
          <li>
            <Link to="preferences" className="text-blue-600 hover:underline">
              Preferences
            </Link>
          </li>
          <li>
            <Link to="security" className="text-blue-600 hover:underline">
              Security
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="system-config" element={<SystemConfig />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </div>
  )
}

