'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/auth/auth-admin-bg.png')] bg-cover bg-center brightness-50" />

      {/* Card */}
      <div
        className="
          relative z-10 w-full max-w-[655px]
          rounded-[20px] bg-white
          px-6 sm:px-10 py-10
          text-center
        "
      >
        <Typography
          variant="h4"
          font="Montserrat"
          weight="bold"
          className="text-[#212729] text-[24px]"
        >
          Verifikasi Akun Sekarang
        </Typography>
        <Typography
          variant="bt"
          font="Montserrat"
          weight="regular"
          className="mt-2 mb-8 text-center text-[#494848] text-[14px]"
        >
          Terima kasih telah mendaftar! Cek email{' '}
          <span className="font-semibold">rextra@gmail.com</span> untuk
          verifikasi akun dalam 24 jam.
        </Typography>

        <Image
          src="/images/auth/auth-user-verifikasi-akun-sekarang.png"
          alt="Verifikasi Akun"
          width={249}
          height={241}
          className="mx-auto my-auto object-contain"
        />

        {/* Buttons */}
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button className="w-full sm:flex-1 bg-[#0046CC] hover:bg-[#0046CC]/80 rounded-lg py-6">
            <Typography
              variant="bt"
              font="Poppins"
              weight="semibold"
              className="text-center  text-white text-[18px]"
            >
              Buka Email
            </Typography>
          </Button>

          <Button className="w-full sm:flex-1 bg-[#CCDDFF] hover:bg-[#CCDDFF]/80 rounded-lg py-6">
            <Typography
              variant="bt"
              font="Poppins"
              weight="semibold"
              className="text-center  text-[#0046CC] text-[18px]"
            >
              Buka Email
            </Typography>
          </Button>
        </div>

        <Typography
          variant="bt"
          font="Montserrat"
          weight="regular"
          className="mt-5 mb-8 text-center text-[#494848] text-[14px]"
        >
          Belum menerima e-mail?{' '}
          <a href="#" className="font-semibold text-[#003499] underline">
            Kirim Ulang
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default Page
