import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Dashboard from "./pages/dashboard/Dashboard"
import Owner from "./pages/Owner"
import Users from "./pages/Users"
import Financials from "./pages/Financials"
import HR from "./pages/HR"
import LoginPage from "./pages/login/LoginPage"
import MenusPage from "./pages/settings/MenusPage"
import BranchesPage from "./pages/settings/BranchesPage"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <div className="pt-32 pb-12 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                  <Routes>
                    {/* Dashboard */}
                    <Route index element={<Dashboard />} />
                    {/* Settings Pages */}
                    <Route path="settings/menus" element={<MenusPage />} />
                    <Route path="settings/branches" element={<BranchesPage />} />

                    {/* Other Routes */}
                    <Route path="owner/*" element={<Owner />} />
                    <Route path="users/*" element={<Users />} />
                    <Route path="financials/*" element={<Financials />} />
                    <Route path="hr/*" element={<HR />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

