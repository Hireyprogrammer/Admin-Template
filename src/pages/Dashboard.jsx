import StatsGrid from "../components/dashboard/StatsGrid"
import DueRentals from "../components/dashboard/DueRentals"
import RecentRents from "../components/dashboard/RecentRents"

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DueRentals />
        <StatsGrid />
      </div>
      <div className="mt-6">
        <RecentRents />
      </div>
    </div>
  )
}