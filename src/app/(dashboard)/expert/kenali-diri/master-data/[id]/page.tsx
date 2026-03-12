'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useRiasecDetailQuery } from '../hooks/riasec'
import RiasecHeader from '../components/RiasicHeader'
import RiasecSection from '../components/RiasecSection'
import { useUpdateRiasecMutation } from '../hooks/riasec-update'

export default function RiasecDetailPage() {
  const params = useParams()
  const id = params.id as string

  const { data, isLoading } = useRiasecDetailQuery(id)

  const [isEdit, setIsEdit] = useState(false)
  const { mutate: updateRiasec, isPending } = useUpdateRiasecMutation()
  const [form, setForm] = useState({
    riasec_title: '',
    riasec_description: '',
    strengths: [] as string[],
    challenges: [] as string[],
    strategies: [] as string[],
    work_environments: [] as string[],
    interaction_styles: [] as string[],
  })

  if (isLoading) return <div>Loading...</div>

  const riasec = data?.data

  if (!riasec) return null

  const handleToggleEdit = (value: boolean) => {
    if (value) {
      setForm({
        riasec_title: riasec.title,
        riasec_description: riasec.description,
        strengths: [...riasec.strengths],
        challenges: [...riasec.challenges],
        strategies: [...riasec.strategies],
        work_environments: [...riasec.work_environments],
        interaction_styles: [...riasec.interaction_styles],
      })
    } else {
      setForm({
        riasec_title: '',
        riasec_description: '',
        strengths: [],
        challenges: [],
        strategies: [],
        work_environments: [],
        interaction_styles: [],
      })
    }
    setIsEdit(value)
  }

  return (
    <div className="w-full p-6 space-y-6">
      <RiasecHeader isEdit={isEdit} setIsEdit={handleToggleEdit} />

      {isEdit ? (
        <>
          {/* ── EDIT MODE ─────────────────────────────────── */}

          {/* Informasi Dasar Card */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-blue-500 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold">Informasi Dasar</span>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 font-medium">
                    Kode
                  </label>
                  <input
                    value={riasec.code}
                    disabled
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 bg-gray-50 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 font-medium">
                    Judul
                  </label>
                  <input
                    value={form.riasec_title}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        riasec_title: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium">
                  Deskripsi / Tentang Kode
                </label>
                <textarea
                  value={form.riasec_description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      riasec_description: e.target.value,
                    }))
                  }
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            <RiasecSection
              title="Kekuatan Profil"
              items={form.strengths}
              onChange={(items) =>
                setForm((prev) => ({ ...prev, strengths: items }))
              }
              isEdit
            />
            <RiasecSection
              title="Tantangan Profil"
              items={form.challenges}
              onChange={(items) =>
                setForm((prev) => ({ ...prev, challenges: items }))
              }
              isEdit
            />
            <RiasecSection
              title="Strategi Pengembangan"
              items={form.strategies}
              onChange={(items) =>
                setForm((prev) => ({ ...prev, strategies: items }))
              }
              isEdit
            />
            <RiasecSection
              title="Gaya Interaksi"
              items={form.interaction_styles}
              onChange={(items) =>
                setForm((prev) => ({ ...prev, interaction_styles: items }))
              }
              isEdit
            />
            <RiasecSection
              title="Lingkungan Kerja Ideal"
              items={form.work_environments}
              onChange={(items) =>
                setForm((prev) => ({ ...prev, work_environments: items }))
              }
              isEdit
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={() => updateRiasec({ id: riasec.id, ...form })}
              disabled={isPending}
              className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors disabled:opacity-60 cursor-pointer"
            >
              {isPending ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* ── PREVIEW MODE ──────────────────────────────── */}

          {/* Title */}
          <h1 className="text-2xl font-semibold text-black">{riasec.title}</h1>

          {/* Description */}
          <div className="border border-black rounded-xl p-6">
            <p className="text-gray-600">{riasec.description}</p>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <RiasecSection
              title="Kekuatan Profil"
              items={riasec.strengths}
              onChange={() => {}}
              isEdit={false}
            />
            <RiasecSection
              title="Tantangan Profil"
              items={riasec.challenges}
              onChange={() => {}}
              isEdit={false}
            />
            <RiasecSection
              title="Strategi Pengembangan"
              items={riasec.strategies}
              onChange={() => {}}
              isEdit={false}
            />
            <RiasecSection
              title="Gaya Interaksi"
              items={riasec.interaction_styles}
              onChange={() => {}}
              isEdit={false}
            />
            <RiasecSection
              title="Lingkungan Kerja Ideal"
              items={riasec.work_environments}
              onChange={() => {}}
              isEdit={false}
            />
          </div>
        </>
      )}
    </div>
  )
}
