import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TestResult } from '../TestExpertTable'
import { MahasiswaTestTable } from '../TestTable'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import MasterDataCard from './MasterDataCard'
import { RIASECTypeBubble } from './RIASECTypeBubble'

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
          <ProfilKodeRIASECTab />
        </TabsContent>

        <TabsContent value="visual" className="pt-6"></TabsContent>
      </Tabs>
    </div>
  )
}

const ProfilKodeRIASECTab = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
      <div
        className="
            flex gap-2
            w-fit
            bg-[#D3D4D4]/15
            outline outline-1 outline-[#B5B7B8]
            rounded-lg
            py-2
            px-5
            
          "
      >
        <div className="flex flex-row gap-x-2 items-center">
          <Typography variant="l2" className="text-[#003499]">
            Semua
          </Typography>
          <div className="bg-[#0046CC] rounded-xl">
            <Typography
              variant="l2"
              weight="bold"
              className="py-1 px-3 text-white"
            >
              156
            </Typography>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <Typography variant="l2" className="text-[#003499]">
            1 Huruf
          </Typography>
          <div className="bg-[#0046CC] rounded-xl">
            <Typography
              variant="l2"
              weight="bold"
              className="py-1 px-3 text-white"
            >
              6
            </Typography>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <Typography variant="l2" className="text-[#003499]">
            2 Huruf
          </Typography>
          <div className="bg-[#0046CC] rounded-xl">
            <Typography
              variant="l2"
              weight="bold"
              className="py-1 px-3 text-white"
            >
              30
            </Typography>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <Typography variant="l2" className="text-[#003499]">
            2 Huruf
          </Typography>
          <div className="bg-[#0046CC] rounded-xl">
            <Typography
              variant="l2"
              weight="bold"
              className="py-1 px-3 text-white"
            >
              120
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 mt-12">
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
        <MasterDataCard id={1}>
          <RIASECTypeBubble type="R" />
          <RIASECTypeBubble type="I" />
          <RIASECTypeBubble type="S" />
        </MasterDataCard>
      </div>
    </div>
  )
}
