export default function DueRentals() {
    return (
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
    )
  }