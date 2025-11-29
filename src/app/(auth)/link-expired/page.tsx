'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const LinkExpiredPage = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('/images/auth/auth-admin-bg.png')] bg-cover bg-center brightness-60"></div>{' '}
      <div
        className="relative z-10 mx-auto flex flex-col bg-white w-full 
  max-w-[95%] sm:max-w-[420px] md:max-w-[480px]
  h-fit rounded-[20px] py-10 px-20 sm:px-[55px] my-auto"
      >
        <Typography
          variant="h4"
          font="Montserrat"
          weight="bold"
          className="text-center text-[#212729] text-[24px] leading-tight"
        >
          Tautan Kadaluarsa
        </Typography>

        <span className="text-[14px] text-[#494848] text-center mx-10 mb-20">
          Wahh tautannya sudah kedaluwarsa. Kamu bisa minta yang baru lewat
          tombol di bawah ya!
        </span>

        <Image
          src="/images/auth/link-expired-mascot.png"
          alt="Reset Password Email Sent"
          width={996}
          height={964}
          className="mx-auto mb-20  object-contain w-[249px] h-[241px] aspect-auto"
        />
        <Button className="bg-[#0046CC] hover:bg-[#0046CC]/80 hover:cursor-pointer rounded-lg">
          <Typography
            variant="bt"
            font="Poppins"
            weight="semibold"
            className="text-center  text-white text-[18px]"
          >
            Kirim Tautan Baru
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default LinkExpiredPage
