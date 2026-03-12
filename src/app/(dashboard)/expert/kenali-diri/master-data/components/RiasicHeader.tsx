'use client'

import { useRouter } from 'next/navigation'

type Props = {
  isEdit: boolean
  setIsEdit: (v: boolean) => void
}

export default function RiasecHeader({ isEdit, setIsEdit }: Props) {
  const router = useRouter()

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-600 hover:underline cursor-pointer"
      >
        ← Kembali
      </button>

      <button
        onClick={() => setIsEdit(!isEdit)}
        className="px-4 py-2 border rounded-lg text-sm text-black border-black cursor-pointer hover:bg-gray-200"
      >
        {isEdit ? 'Preview' : 'Edit'}
      </button>
    </div>
  )
}
