import StatsGrid from "../components/dashboard/StatsGrid"
import DueRentals from "../components/dashboard/DueRentals"
import RecentRents from "../components/dashboard/RecentRents"

export default function Dashboard() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DueRentals />
          <StatsGrid />
        </div>
        
        <div className="mt-4">
          <RecentRents />
        </div>
      </div>
    </>
  )
}