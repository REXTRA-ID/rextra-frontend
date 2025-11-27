import NextImage from '@/components/next-image'
import Typography from '@/components/Typography'
import Link from 'next/link'
import React from 'react'

export default function RexxtraLogin() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header Banner */}
      <div className="w-full bg-[#005DFF] text-white p-6 flex flex-col items-center text-center relative overflow-hidden">
        <h1 className="text-2xl font-bold leading-tight">
          UNLOCK <br /> YOUR DIGITAL <br /> CAREER PATH <br /> WITH{' '}
          <span className="bg-white text-[#005DFF] px-2 py-1 rounded-md">
            REXTRA
          </span>
        </h1>
      </div>

      {/* Main */}
      <div className="w-full px-6 pt-8 pb-16 max-w-md mx-auto">
        <Typography className="text-xl font-semibold mb-1">
          Selamat Datang Kembali!
        </Typography>
        <Typography className="text-sm text-gray-600 mb-6">
          Hi Sobat Rexi 👋 Senang bertemu lagi! Yuk, jelajahi REXTRA dengan
          masuk ke akunmu.
        </Typography>

        <Typography className="text-sm font-medium">Email Aktif*</Typography>
        <input
          type="email"
          placeholder="Masukkan Email Kamu"
          className="w-full mt-1 mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <Typography className="text-sm font-medium">Kata Sandi*</Typography>
        <div className="relative w-full mt-1 mb-2">
          <input
            type="password"
            placeholder="Masukkan Kata Sandi"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
            👁️
          </span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <Typography className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            Ingat saya di perangkat ini
          </Typography>
          <Typography
            className="text-sm text-blue-600 hover:underline"
            href="#"
          >
            Lupa Password?
          </Typography>
        </div>

        <button className="w-full bg-[#005DFF] text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          <Typography>Masuk</Typography>
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <Typography className="text-sm text-gray-500">
            Atau masuk dengan
          </Typography>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
          <NextImage
            width={5}
            height={5}
            src="/google-icon.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <Typography className="font-medium">Google</Typography>
        </button>

        <Typography className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun?{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            Daftar Disini
          </Link>
        </Typography>
      </div>
    </div>
  )
}
