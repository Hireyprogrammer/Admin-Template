export default function RecentRents() {
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
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Rents</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Customer</th>
                <th className="pb-2">Apartment</th>
                <th className="pb-2">Start Date</th>
                <th className="pb-2">End Date</th>
                <th className="pb-2">Duration</th>
                <th className="pb-2">Left Period</th>
              </tr>
            </thead>
            <tbody>
              {recentRents.map((rent, index) => (
                <tr key={index}>
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
    )
  }