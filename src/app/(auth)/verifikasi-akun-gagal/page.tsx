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

        <span className="mt-2 mb-8 text-[14px] text-[#494848] max-w-md">
          Verifikasi gagal karena tautannya sudah kedaluwarsa. Klik tombol di
          bawah untuk mendapatkan tautan baru (berlaku 24 jam).
        </span>

        <Image
          src="/images/auth/auth-user-verifikasi-akun-gagal.png"
          alt="Reset Password Email Sent"
          width={996}
          height={964}
          className="mx-auto mb-10 w-[249px] h-[241px] object-contain"
        />
        <div className="mb-5 flex flex-row items-center gap-2">
          <Button className="w-full sm:w-3/4 mx-auto bg-[#0046CC] hover:bg-[#0046CC]/80 rounded-lg py-6">
            <span className="text-white text-[16px]">Kirim Tautan Baru</span>
          </Button>
        </div>
        <span className="mt-5 mb-8 text-[14px] text-[#494848] max-w-md">
          Belum menerima e-mail?{' '}
          <a className="underline text-semibold text-[#003499]" href="">
            Kirim Ulang
          </a>
        </span>
      </div>
    </div>
  )
}

export default page
