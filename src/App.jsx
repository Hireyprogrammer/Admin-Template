import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Owner from "./pages/Owner"
import Users from "./pages/Users"
import Financials from "./pages/Financials"
import HR from "./pages/HR"
import LoginPage from "./pages/login/LoginPage"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="*" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-12 px-6 sm:px-8 lg:px-12"> 
              <div className="max-w-7xl mx-auto"> 
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/settings/*" element={<Settings />} />
                  <Route path="/owner/*" element={<Owner />} />
                  <Route path="/users/*" element={<Users />} />
                  <Route path="/financials/*" element={<Financials />} />
                  <Route path="/hr/*" element={<HR />} />
                </Routes>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}
