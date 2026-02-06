import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TestResult } from '../TestExpertTable'
import { MahasiswaTestTable } from '../TestTable'
import Typography from '@/components/Typography'

export default function DataTabs({
  isExpert = false,
  expertData,
  mahasiswaData,
}: {
  isExpert?: boolean
  expertData?: TestResult[]
  mahasiswaData?: MahasiswaTestTable[]
}) {
  return (
    <div className="w-full ">
      <Tabs defaultValue="raw" className="w-full">
        <div className="w-full flex flex-row border-b-[1px] border-[#6B6F70] p-0">
          <TabsList className="translate-y-[2px] bg-transparent border-b w-1/4 justify-start rounded-none h-auto p-0 ">
            <TabsTrigger
              value="raw"
              className="rounded-none border-b-4 border-transparent px-4 py-2 text-sm font-medium data-[state=active]:border-[#003499] data-[state=active]:text-[#003499]"
            >
              <Typography variant="l1" weight="medium" className="">
                Profil Kode RIASEC
              </Typography>
            </TabsTrigger>

            <TabsTrigger
              value="visual"
              className="rounded-none border-b-4 border-transparent px-4 py-2 text-sm font-medium data-[state=active]:border-[#003499] data-[state=active]:text-[#003499]"
            >
              <Typography variant="l1" weight="medium" className="">
                Kategori Tes Lain
              </Typography>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="raw" className="pt-6">
          Profil Kode RIASEC
        </TabsContent>

        <TabsContent value="visual" className="pt-6"></TabsContent>
      </Tabs>
    </div>
  )
}
