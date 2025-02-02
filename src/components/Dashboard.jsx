import { BarChart, Users, Home, FileText } from "lucide-react"

export default function Dashboard() {
  const stats = [
    { label: "Tenants", value: "1", icon: Users },
    { label: "Apartments", value: "1", icon: Home },
    { label: "Buildings", value: "1", icon: Home },
    { label: "Unpaid Invoices", value: "0", icon: FileText },
  ]

  const recentRents = [
    {
      customerName: "Casesha Ali Geessey",
      apartmentNo: "Apartment-1",
      startDate: "2025-01-27",
      endDate: "2025-01-29",
      duration: "2 days",
      leftPeriod: "3 days",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Due Rentals */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Due Rentals</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Month</th>
                <th className="pb-2">Tenant</th>
                <th className="pb-2">Remaining</th>
              </tr>
            </thead>
            <tbody>{/* Add table rows here */}</tbody>
          </table>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Rents */}
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Last 5 Rents</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Customer Name</th>
                <th className="pb-2">Apartment No</th>
                <th className="pb-2">Start Date</th>
                <th className="pb-2">End Date</th>
                <th className="pb-2">Duration</th>
                <th className="pb-2">Left Period</th>
              </tr>
            </thead>
            <tbody>
              {recentRents.map((rent, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{rent.customerName}</td>
                  <td className="py-2">{rent.apartmentNo}</td>
                  <td className="py-2">{rent.startDate}</td>
                  <td className="py-2">{rent.endDate}</td>
                  <td className="py-2">{rent.duration}</td>
                  <td className="py-2">{rent.leftPeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Expense</h2>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart will be rendered here</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Income</h2>
          <div className="h-64 flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart will be rendered here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

