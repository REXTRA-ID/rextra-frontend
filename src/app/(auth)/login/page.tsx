import NextImage from '@/components/next-image'
import Typography from '@/components/Typography'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function RexxtraLogin() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden relative">
      {/* Header Banner */}
      <div className="w-full lg:w-1/2 bg-[#005DFF] text-white p-6 flex flex-col items-center text-center relative overflow-hidden lg:order-2">
        {/* <h1 className="text-2xl font-bold leading-tight text-[#005DFF] lg:hidden flex">
          UNLOCK <br /> YOUR DIGITAL <br /> CAREER PATH <br /> WITH{' '}
          <span className="bg-transparent text-[#005DFF] px-2 py-1 rounded-md lg:hidden flex">
            REXTRA
          </span>
        </h1> */}

        <NextImage
          src="/auth/butterfly.png"
          alt="Butterfly"
          width={65}
          height={64}
          className={cn(
            'absolute top-[75px] right-3',
            'w-[65px] max-w-full pointer-events-none select-none lg:flex hidden z-[3]',
          )}
        />

        <NextImage
          src="/auth/butterfly.png"
          alt="Butterfly"
          width={65}
          height={64}
          className={cn(
            'absolute top-[384px] left-[280px]',
            'w-[65px] max-w-full pointer-events-none select-none lg:flex hidden z-[3] rotate-[30deg]',
          )}
        />

        <NextImage
          src="/auth/butterfly.png"
          alt="Butterfly"
          width={65}
          height={64}
          className={cn(
            'absolute top-[366px] left-[34px]',
            'w-[65px] max-w-full pointer-events-none select-none lg:flex hidden z-[3] rotate-[40deg]',
          )}
        />

        <NextImage
          src="/auth/text.png"
          alt="Text"
          width={519}
          height={297}
          className={cn(
            'absolute top-[88px]',
            'w-[519px] max-w-full pointer-events-none select-none lg:flex hidden z-[4]',
          )}
        />
        <NextImage
          src="/auth/mascot.svg"
          alt="Mascot Rextra"
          width={540}
          height={550}
          className={cn(
            'absolute bottom-0 right-0',
            'w-[540px] max-w-full pointer-events-none select-none lg:flex hidden z-[3]',
          )}
        />
        <NextImage
          src="/auth/wave-rextra-top.svg"
          alt="Wave Large"
          width={272}
          height={179}
          className={cn(
            'absolute top-0 left-0',
            'w-[272px] max-w-full pointer-events-none select-none lg:flex hidden',
          )}
        />
        <NextImage
          src="/auth/star-right.png"
          alt="Right Star"
          width={500}
          height={678}
          className={cn(
            'absolute right-0 top-[55%] -translate-y-1/2',
            'w-[500px] max-w-full pointer-events-none select-none lg:flex hidden z-[2]',
          )}
        />
        <NextImage
          src="/auth/star-bottom.png"
          alt="Bottom Star"
          width={779}
          height={747}
          className={cn(
            'absolute left-0 bottom-0',
            'w-[779px] max-w-full pointer-events-none select-none lg:flex hidden z-[2]',
          )}
        />
      </div>

      <NextImage
        src="/auth/wave-rextra.svg"
        alt="Wave"
        width={250}
        height={120}
        className={cn(
          'absolute bottom-0 vh-sm',
          'left-0 w-[200px] sm:w-[250px] max-w-full pointer-events-none select-none lg:hidden flex',
        )}
      />

      <NextImage
        src="/auth/wave-rextra-lg.svg"
        alt="Wave"
        width={322}
        height={179}
        className={cn(
          'absolute bottom-0',
          'left-0 w-[322px] max-w-full pointer-events-none select-none hidden lg:flex',
        )}
      />

      {/* Main */}
      <div className="w-full lg:px-10 lg:w-1/2 pr-5 pl-[23px] pt-8 pb-16 max-w-md lg:max-w-xl md:max-w-lg mx-auto">
        <div className="pb-[72px] pt-6 lg:flex hidden">
          <NextImage
            src="/auth/logo-rextra.svg"
            alt="logo rextra"
            width={137}
            height={25}
            className="left-[72px]"
          />
        </div>
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
            src="/auth/google-logo.svg"
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
