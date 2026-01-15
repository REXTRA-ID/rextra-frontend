import { Button } from '@/components/ui/button'
import Typography from '@/components/Typography'
import { SearchBar } from './Searchbar'

const tabs = ['Semua Data', 'Selesai', 'Sedang Berjalan', 'Dihentikan']

export default function FilterTabs() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Typography variant="h5" weight="bold" font="Poppins">
          Riwayat Tes Kenali Diri
        </Typography>
        <Typography variant="l1" className="text-gray-500" font="Poppins">
          Menyajikan 120 data hasil tes Kenali Diri user REXTRA.
        </Typography>
      </div>

      <div className="flex flex-row gap-x-12 w-full">
        <div className="w-fit mt-2 flex flex-row gap-2 bg-[#D3D4D4]/15 outline-[#B5B7B8] outline-1 rounded-lg p-1">
          {tabs.map((t) => (
            <Button
              key={t}
              className="rounded-lg bg-trasparent outline-0 hover:bg-[#CCDDFF] hover:border-[#669AFF] hover:border-1 shadow-none text-[#669AFF]"
            >
              <Typography variant="l2">{t}</Typography>
            </Button>
          ))}
        </div>
        <SearchBar />
      </div>
    </div>
  )
}
