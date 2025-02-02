import { FaUsers, FaHome, FaFileInvoiceDollar } from "react-icons/fa"

export default function StatsGrid() {
  const stats = [
    { label: "Tenants", value: "1", icon: FaUsers },
    { label: "Apartments", value: "1", icon: FaHome },
    { label: "Buildings", value: "1", icon: FaHome },
    { label: "Unpaid Invoices", value: "0", icon: FaFileInvoiceDollar },
  ]

  return (
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
  )
}