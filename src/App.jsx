import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Owner from "./pages/Owner"
import Users from "./pages/Users"
import Financials from "./pages/Financials"
import HR from "./pages/HR"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route path="/owner/*" element={<Owner />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/financials/*" element={<Financials />} />
          <Route path="/hr/*" element={<HR />} />
        </Routes>
      </div>
    </Router>
  )
}

