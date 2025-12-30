'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
      <div className="absolute inset-0 bg-[url('/images/auth/auth-admin-bg.png')] bg-cover bg-center brightness-60"></div>{' '}
      <div
        className="relative z-10 w-full max-w-[655px]
          rounded-[20px] bg-white
          px-6 sm:px-10 py-10
          text-center"
      >
        <Typography
          variant="h4"
          font="Montserrat"
          weight="bold"
          className="text-[#212729] text-[24px] leading-tight"
        >
          Verifikasi Akun Gagal
        </Typography>

        <Typography
          variant="bt"
          font="Montserrat"
          weight="regular"
          className="mt-2 mb-8 text-center text-[#494848] text-[14px]"
        >
          Verifikasi gagal karena tautannya sudah kedaluwarsa. Klik tombol di
          bawah untuk mendapatkan tautan baru (berlaku 24 jam).
        </Typography>

        <Image
          src="/images/auth/auth-user-verifikasi-akun-gagal.png"
          alt="Reset Password Email Sent"
          width={996}
          height={964}
          className="mx-auto w-[249px] h-[241px] object-contain my-auto"
        />

        <Button className="w-full sm:w-3/4 mx-auto mt-5 bg-[#0046CC] hover:bg-[#0046CC]/80 rounded-lg py-6">
          <Typography
            variant="bt"
            font="Poppins"
            weight="semibold"
            className="text-center  text-white text-[18px]"
          >
            Kirim Tautan Baru
          </Typography>{' '}
        </Button>

        <Typography
          variant="bt"
          font="Montserrat"
          weight="regular"
          className="mt-5 mb-5 text-center text-[#494848] text-[14px]"
        >
          Belum menerima e-mail?{' '}
          <a className="underline text-semibold text-[#003499]" href="">
            Kirim Ulang
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default page
