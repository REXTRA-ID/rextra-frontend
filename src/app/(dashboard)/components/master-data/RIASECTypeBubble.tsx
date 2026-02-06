'use client'

type RIASECType = 'R' | 'I' | 'A' | 'S' | 'E' | 'C'

interface RIASECTypeBubbleProps {
  type: RIASECType
}

const typeColorMap: Record<RIASECType, string> = {
  R: 'bg-red-100 text-red-700',
  I: 'bg-blue-100 text-blue-700',
  A: 'bg-purple-100 text-purple-700',
  S: 'bg-green-100 text-green-700',
  E: 'bg-yellow-100 text-yellow-700',
  C: 'bg-gray-100 text-gray-700',
}

export function RIASECTypeBubble({ type }: RIASECTypeBubbleProps) {
  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold
        ${typeColorMap[type]}`}
    >
      {type}
    </div>
  )
}
