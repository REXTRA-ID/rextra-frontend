import DetailedSearchInfo from '../components/DetailedSearchInfo'
import FilterTabs from '../components/FilterTabs'
import TestTable from '../components/TestTable'

export default function PageLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 p-10">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <FilterTabs />
        {/* <FilterBar /> */}
        <DetailedSearchInfo />

        <TestTable />
      </div>
    </div>
  )
}
