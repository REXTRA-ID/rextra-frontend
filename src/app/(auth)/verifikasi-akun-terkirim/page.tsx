'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
      <Typography
        variant="h4"
        font="Montserrat"
        weight="bold"
        className="text-[#212729] text-[24px] leading-tight"
      >
        Verifikasi Akun Gagal
      </Typography>

      <span className="mt-2 mb-8 text-[14px] text-[#494848] max-w-md">
        Email verifikasi telah dikirim ke rextra@gmail.com. Cek inbox atau spam
        dan klik tautannya dalam 24 jam.
      </span>

      <Image
        src="/images/auth/auth-user-verifikasi-akun-sekarang.png"
        alt="Reset Password Email Sent"
        width={996}
        height={964}
        className="mb-10 w-[249px] h-[241px] object-contain"
      />
      <div className="flex flex-row items-center gap-2">
        <Button className="bg-[#0046CC] hover:bg-[#0046CC]/80 rounded-lg">
          <Typography
            variant="bt"
            font="Poppins"
            weight="regular"
            className="text-white text-[18px] p-5"
          >
            Kirim Ulang Email
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default page
