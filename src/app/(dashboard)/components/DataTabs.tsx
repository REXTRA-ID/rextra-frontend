'use client'

import Typography from '@/components/Typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DetailedSearchInfo from './DetailedSearchInfo'
import TestTable from './TestTable'
import KontrolPencarianUmpanBalik from './KontrolDanPencarianUmpanBalik'
import KontrolVisualisasi from './KontrolVisualisasi'
import ScoreCard from './visualisasi/ScoreCard'
import { MessageSquareText, Radar, Smile, ThumbsUp } from 'lucide-react'
import ChartLayout from './visualisasi/ChartLayout'
import { TrendingUp } from 'lucide-react'
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Sen', peserta: 25, feedback: 8 },
  { month: 'Sel', peserta: 32, feedback: 12 },
  { month: 'Rab', peserta: 28, feedback: 10 },
  { month: 'Kam', peserta: 35, feedback: 15 },
  { month: 'Jum', peserta: 40, feedback: 18 },
  { month: 'Sab', peserta: 20, feedback: 8 },
  { month: 'Min', peserta: 15, feedback: 5 },
]

const chartData2 = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
]

const chartData3 = [
  { scale: '1', value: 1 },
  { scale: '2', value: 1 },
  { scale: '3', value: 1 },
  { scale: '4', value: 1 },
  { scale: '5', value: 3 },
  { scale: '6', value: 5, highlight: true }, // highlighted bar
  { scale: '7', value: 4 },
]
const lineChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

const pieChartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'var(--chart-1)',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-2)',
  },
  firefox: {
    label: 'Firefox',
    color: 'var(--chart-3)',
  },
  edge: {
    label: 'Edge',
    color: 'var(--chart-4)',
  },
  other: {
    label: 'Other',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig

const barChartConfig1 = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

const barChartData2 = [
  { label: 'Durasi tes terlalu lama', value: 6, highlight: true },
  { label: 'Navigasi membingungkan', value: 3 },
  { label: 'Pertanyaan membingungkan', value: 2 },
  { label: 'Error/bug sistem', value: 2 },
  { label: 'Penjelasan sulit dipahami', value: 2 },
  { label: 'Instruksi kurang jelas', value: 2 },
]

const barChartConfig2 = {
  value: {
    label: 'Jumlah',
    color: '#DC2626',
  },
} satisfies ChartConfig

const stackedBarChartData = [
  {
    label: 'Kemudahan',
    low: 15,
    mid: 8,
    high: 77,
  },
  {
    label: 'Relevansi',
    low: 15,
    mid: 15,
    high: 70,
  },
  {
    label: 'Kepuasan',
    low: 15,
    mid: 8,
    high: 77,
  },
]

const stackedBarChartConfig = {
  low: { label: 'Rendah', color: '#6EA3FF' },
  mid: { label: 'Sedang', color: '#0046CC' },
  high: { label: 'Tinggi', color: '#001F5B' },
} satisfies ChartConfig

export default function DataTabs() {
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
                Data mentah
              </Typography>
            </TabsTrigger>

            <TabsTrigger
              value="visual"
              className="rounded-none border-b-4 border-transparent px-4 py-2 text-sm font-medium data-[state=active]:border-[#003499] data-[state=active]:text-[#003499]"
            >
              <Typography variant="l1" weight="medium" className="">
                Visualisasi
              </Typography>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="raw" className="pt-6">
          <RawDataPanel />
        </TabsContent>

        <TabsContent value="visual" className="pt-6">
          <VisualizationPanel />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RawDataPanel() {
  return (
    <>
      <KontrolPencarianUmpanBalik />
      <TestTable />
    </>
  )
}

function VisualizationPanel() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-1 mb-12">
        <Typography variant="h6" weight="bold" font="Poppins">
          Visualisasi Data Umpan Balik
        </Typography>
        <Typography variant="l1" className="text-gray-500" font="Poppins">
          Ringkasan visual untuk memahami tren kemudahan, relevansi rekomendasi,
          kepuasan, kendala penggunaan, serta partisipasi pengisian
          feedback{' '}
        </Typography>
      </div>
      <KontrolVisualisasi />

      <div className="flex flex-col xl:flex xl:flex-row gap-y-6 xl:gap-x-6 mb-12">
        <ScoreCard
          title="Total Feedback"
          score={15}
          outOf={0}
          displayOutOf={false}
          description="Naik 25% dibanding periode sebelumnya"
        >
          <div className="bg-[#CCDDFF] p-1 rounded-lg">
            <ThumbsUp className="text-[#0046CC] p-1" />
          </div>
        </ScoreCard>
        <ScoreCard
          title="Rata-Rata Kemudahan"
          score={5.5}
          outOf={7}
          displayOutOf={true}
          description="Naik 25% dibanding periode sebelumnya"
        >
          <div className="bg-[#CCDDFF] p-1 rounded-lg">
            <MessageSquareText className="text-[#0046CC] p-1" />
          </div>
        </ScoreCard>
        <ScoreCard
          title="Rata-Rata Relevansi"
          score={5.3}
          outOf={7}
          displayOutOf={true}
          description="Naik 25% dibanding periode sebelumnya"
        >
          <div className="bg-[#CCDDFF] p-1 rounded-lg">
            <Radar className="text-[#0046CC] p-1" />
          </div>
        </ScoreCard>
        <ScoreCard
          title="Rata-Rata Kepuasan"
          score={5.4}
          outOf={7}
          displayOutOf={true}
          description="Naik 25% dibanding periode sebelumnya"
        >
          <div className="bg-[#CCDDFF] p-1 rounded-lg">
            <Smile className="text-[#0046CC] p-1" />
          </div>
        </ScoreCard>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-[2fr_1fr] gap-3">
        <ChartLayout
          title="Tren Peserta Tes vs Pengisi Feedback"
          periode="Data untuk periode 1-7 Mei 2025"
          description="Penurunan peserta tes dan pengisi feedback terjadi bersamaan. Perlu peninjauan faktor penyebab (traffic, kampanye, atau kendala teknis)."
          className="w-full"
        >
          <ChartContainer config={lineChartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{ left: -25, right: 10, top: 20 }}
            >
              {/* Gradient fills */}
              <defs>
                <linearGradient id="fillPeserta" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1CB5B5" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#1CB5B5" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="fillFeedback" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0046CC" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#0046CC" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Grid */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              {/* Y Axis (Vertical Axis Added) */}
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                tick={{ fill: '#6B6F70', fontSize: 12 }}
              />

              {/* X Axis */}
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
                tick={{ fill: '#6B6F70', fontSize: 12 }}
              />

              {/* Tooltip */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              {/* Area fills */}
              <Area
                type="natural"
                dataKey="peserta"
                stroke="none"
                fill="url(#fillPeserta)"
              />

              <Area
                type="natural"
                dataKey="feedback"
                stroke="none"
                fill="url(#fillFeedback)"
              />

              {/* Lines */}
              <Line
                type="natural"
                dataKey="peserta"
                stroke="#1CB5B5"
                strokeWidth={3}
                dot={{ r: 6, fill: '#0E8F8F' }}
                activeDot={{ r: 8 }}
              />

              <Line
                type="natural"
                dataKey="feedback"
                stroke="#0046CC"
                strokeWidth={3}
                dot={{ r: 6, fill: '#003499' }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ChartContainer>
        </ChartLayout>

        <ChartLayout
          title="Tren Peserta Tes vs Pengisi Feedback"
          periode="Data untuk periode 1-7 Mei 2025"
          description="Penurunan peserta tes dan pengisi feedback terjadi bersamaan. Perlu peninjauan faktor penyebab (traffic, kampanye, atau kendala teknis)."
          className="w-full"
        >
          <ChartContainer
            config={pieChartConfig}
            className="mx-auto w-full max-w-[260px] h-[260px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                <Pie
                  data={chartData2}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={0}
                  strokeWidth={2}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartLayout>
      </div>

      <div className="flex flex-col mt-3 gap-y-3">
        <ChartLayout
          title="Tingkat Kemudahan Menyelesaikan Tes"
          periode="Data untuk periode 1–7 Mei 2025"
          description="Penilaian cenderung positif, namun masih ada ruang perbaikan (rata-rata 5.5/7)"
          className="w-full"
          isShowDetailSelengkapnyaButton={true}
        >
          <ChartContainer config={barChartConfig1} className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData3}
                margin={{ top: 10, left: 8, right: 8, bottom: 0 }}
                barCategoryGap={4}
                barGap={4}
              >
                {/* Soft horizontal grid */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                {/* Y Axis */}
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* X Axis */}
                <XAxis
                  dataKey="scale"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* Tooltip — no hover background */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                {/* Bars */}
                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {chartData3.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.highlight ? '#0046CC' : '#D6E4FF'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartLayout>

        <ChartLayout
          title="Tingkat Relevansi Rekomendasi Profesi"
          periode="Data untuk periode 1–7 Mei 2025"
          description="Penilaian cenderung positif, namun masih ada ruang perbaikan (rata-rata 5.5/7)"
          className="w-full"
          isShowDetailSelengkapnyaButton={true}
        >
          <ChartContainer config={barChartConfig1} className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData3}
                margin={{ top: 10, left: 8, right: 8, bottom: 0 }}
                barCategoryGap={4}
                barGap={4}
              >
                {/* Soft horizontal grid */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                {/* Y Axis */}
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* X Axis */}
                <XAxis
                  dataKey="scale"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* Tooltip — no hover background */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                {/* Bars */}
                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {chartData3.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.highlight ? '#0046CC' : '#D6E4FF'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartLayout>

        <ChartLayout
          title="Tingkat Kepuasan Keseluruhan"
          periode="Data untuk periode 1–7 Mei 2025"
          description="Penilaian cenderung positif, namun masih ada ruang perbaikan (rata-rata 5.5/7)"
          className="w-full"
          isShowDetailSelengkapnyaButton={true}
        >
          <ChartContainer config={barChartConfig1} className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData3}
                margin={{ top: 10, left: 8, right: 8, bottom: 0 }}
                barCategoryGap={4}
                barGap={4}
              >
                {/* Soft horizontal grid */}
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                {/* Y Axis */}
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* X Axis */}
                <XAxis
                  dataKey="scale"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />

                {/* Tooltip — no hover background */}
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                {/* Bars */}
                <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                  {chartData3.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.highlight ? '#0046CC' : '#D6E4FF'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartLayout>
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-3 mt-3">
        <ChartLayout
          title="Tren Peserta Tes vs Pengisi Feedback"
          periode="Data untuk periode 1-7 Mei 2025"
          description="Penurunan peserta tes dan pengisi feedback terjadi bersamaan. Perlu peninjauan faktor penyebab (traffic, kampanye, atau kendala teknis)."
          className="w-full"
        >
          <ChartContainer
            config={pieChartConfig}
            className="mx-auto w-full max-w-[260px] h-[260px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                <Pie
                  data={chartData2}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={0}
                  strokeWidth={2}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </ChartLayout>

        <ChartLayout
          title="Ragam Kendala Penggunaan"
          periode="Data untuk periode 1–7 Mei 2025"
          description="Kendala tersebar pada banyak jenis, tanpa satu penyebab dominan"
          className="w-full"
        >
          <ChartContainer config={barChartConfig2} className="h-[300px]">
            <BarChart
              data={barChartData2}
              layout="vertical"
              margin={{ left: 0, right: 0, top: 10, bottom: 10 }}
              barCategoryGap={10}
            >
              {/* X Axis (hidden scale) */}
              <XAxis type="number" hide />

              {/* Labels */}
              <YAxis
                type="category"
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#111827', fontSize: 14 }}
                width={180}
              />

              {/* Tooltip */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              {/* Bars */}
              <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={34}>
                {barChartData2.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.highlight ? '#DC2626' : '#FADDDD'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </ChartLayout>
      </div>

      <div className="flex flex-col mt-3">
        <ChartLayout
          title="Komposisi Penilaian: Kemudahan, Relevansi, Kepuasan"
          periode="Data untuk periode 1–7 Mei 2025"
          description="Seluruh metrik menunjukkan dominasi penilaian positif. Fokus berikutnya dapat diarahkan pada peningkatan skala dan konsistensi"
          className="w-full"
        >
          <ChartContainer config={stackedBarChartConfig} className="h-[260px]">
            <BarChart
              data={stackedBarChartData}
              layout="vertical"
              margin={{ left: 0, right: 0, top: 10, bottom: 10 }}
              barCategoryGap={5}
            >
              {/* Percentage axis */}
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
                axisLine={false}
                tickLine={false}
              />

              {/* Labels */}
              <YAxis
                dataKey="label"
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#111827', fontSize: 14 }}
                width={140}
              />

              {/* Tooltip */}
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              {/* Stacks */}
              <Bar
                dataKey="low"
                stackId="a"
                fill="#6EA3FF"
                radius={[8, 0, 0, 8]}
              />
              <Bar dataKey="mid" stackId="a" fill="#0046CC" />
              <Bar
                dataKey="high"
                stackId="a"
                fill="#001F5B"
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ChartContainer>
        </ChartLayout>
      </div>
    </div>
  )
}
