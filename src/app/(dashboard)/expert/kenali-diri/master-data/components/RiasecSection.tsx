'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react'

type Props = {
  title: string
  items: string[]
  isEdit: boolean
  onChange?: (items: string[]) => void
}

export default function RiasecSection({
  title,
  items,
  isEdit,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(true)

  const handleChange = (index: number, value: string) => {
    if (!onChange) return
    const newItems = [...items]
    newItems[index] = value
    onChange(newItems)
  }

  const handleAdd = () => {
    if (!onChange) return
    onChange([...items, ''])
  }

  const handleDelete = (index: number) => {
    if (!onChange) return
    onChange(items.filter((_, i) => i !== index))
  }

  // ── PREVIEW MODE ────────────────────────────────────────────
  if (!isEdit) {
    return (
      <div className="border border-black rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-black">{title}</h3>
        {items.map((item, i) => (
          <p key={i} className="text-sm text-gray-600">
            • {item}
          </p>
        ))}
      </div>
    )
  }

  // ── EDIT MODE ────────────────────────────────────────────────
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </span>
          <span className="font-semibold text-gray-800">{title}</span>
          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-5 pb-5 space-y-3 bg-gray-50">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-start gap-2">
                <textarea
                  value={item}
                  onChange={(e) => handleChange(i, e.target.value)}
                  rows={3}
                  placeholder="Tulis item di sini..."
                  className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => handleDelete(i)}
                  className="text-red-400 hover:text-red-600 mt-1 flex-shrink-0 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium rounded-xl transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Tambah Item
          </button>
        </div>
      )}
    </div>
  )
}
