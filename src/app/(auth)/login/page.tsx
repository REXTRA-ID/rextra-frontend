import NextImage from '@/components/next-image'
import Typography from '@/components/Typography'
import { Input } from '@/components/ui/input'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function RexxtraLogin() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header Banner */}
      <div className="w-full bg-[#005DFF] text-white p-6 flex flex-col items-center text-center relative overflow-hidden">
        <h1 className="text-2xl font-bold leading-tight text-[#005DFF]">
          UNLOCK <br /> YOUR DIGITAL <br /> CAREER PATH <br /> WITH{' '}
          <span className="bg-transparent text-[#005DFF] px-2 py-1 rounded-md">
            REXTRA
          </span>
        </h1>
      </div>

      {/* Main */}
      <div className="w-full pr-5 pl-[23px] pt-8 pb-16 max-w-md mx-auto">
        <Typography
          variant="h5"
          className="text-xl font-bold text-[#212729] leading-[1.4]"
        >
          Selamat Datang Kembali!
        </Typography>
        <Typography
          variant="bt"
          className="text-justify text-sm font-normal text-[#494848] mb-[26px] leading-[1.55]"
        >
          Hi Sobat Rexi👋Senang bertemu lagi! Yuk, jelajahi REXTRA dengan masuk
          ke akunmu.
        </Typography>

        <Typography className="text-sm font-medium">
          Email Aktif<span className="text-red-500">*</span>
        </Typography>
        <Input
          type="email"
          placeholder="Masukkan Email Kamu"
          className="w-full h-[48px] mt-1 mb-4 px-4 py-3 rounded-[10px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <Typography className="text-sm font-medium">
          Kata Sandi<span className="text-red-500">*</span>
        </Typography>
        <div className="relative w-full mt-1 mb-2">
          <Input
            type="password"
            placeholder="Masukkan Kata Sandi"
            className="w-full h-[48px] px-4 py-3 rounded-[10px] border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
            <Eye />
          </span>
        </div>

        <div className="flex justify-between items-center mt-4 mb-15">
          <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
            <Input
              type="checkbox"
              className="h-4 w-4 p-[10px] accent-blue-600 cursor-pointer border-[#A79B9B] border-[0.5px]"
            />
            <Typography className="text-[#494848] text-xs font-medium">
              Ingat saya di perangkat ini
            </Typography>
          </label>

          <Typography className="text-xs text-[#3379FF] font-semibold hover:underline cursor-pointer">
            Lupa Password?
          </Typography>
        </div>

        <button className="w-full bg-[#005DFF] px-4 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition">
          <Typography className="text-white text-lg">Masuk</Typography>
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#8A8C90]"></div>
          <Typography className="text-xs text-[#212729] font-normal">
            Atau masuk dengan
          </Typography>
          <div className="flex-1 h-px bg-[#8A8C90]"></div>
        </div>

        <button className="w-full border border-[#111415] border-[0.5] px-4 py-3 rounded-[10px] flex items-center justify-center gap-3 hover:bg-gray-50 transition">
          <NextImage
            width={25}
            height={25}
            src="/google-logo.svg"
            alt="Google"
          />
          <Typography className="font-normal text-lg">Google</Typography>
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
