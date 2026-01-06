'use client'
import Typography from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AccountVerificationSentPage = () => {
  return (
    // Changed min-h-screen to min-h-dvh for better mobile support
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center bg-white px-4 text-center overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 
    bg-[url('/images/auth/auth-admin-bg.png')] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    bg-fixed
    brightness-60
    hidden
    md:block"
        aria-hidden="true"
      />
      <Image
        src="/images/auth/bintang1.png"
        width={290}
        height={231}
        alt="bintang1"
        className="absolute inset-0 z-0 md:hidden block"
      />
      <Image
        src="/images/auth/bintang2.png"
        width={290}
        height={231}
        alt="bintang2"
        className="
    absolute md:hidden block z-10
    bottom-0 right-0
    w-[290px] h-auto
    translate-x-1/4 translate-y-1/4
    pointer-events-none
  "
      />

      {/* Content Card */}
      <div
        className="relative z-10 w-full max-w-[655px]
          rounded-[20px] bg-white
          px-6 sm:px-10 py-10
          text-center shadow-xl"
      >
        <Typography
          variant="h4"
          font="Montserrat"
          weight="bold"
          className="text-center text-[#212729] text-[24px] leading-tight"
        >
          Tautan Verifikasi Terkirim.{' '}
        </Typography>

        <Typography
          variant="bt"
          font="Montserrat"
          weight="regular"
          className="mt-2 mb-8 text-center text-[#494848] text-[14px]"
        >
          Email verifikasi telah dikirim ke rextra@gmail.com. Cek inbox atau
          spam dan klik tautannya dalam 24 jam.{' '}
        </Typography>

        <Image
          src="/images/auth/change-password-success-mascot.png"
          alt="Reset Password Email Sent"
          width={996}
          height={964}
          className="mx-auto object-contain w-[249px] h-[241px] aspect-auto"
        />

        <Button className="w-full mt-5 bg-[#0046CC] hover:bg-[#0046CC]/80 rounded-lg py-6">
          <Typography
            variant="bt"
            font="Poppins"
            weight="semibold"
            className="text-white text-[16px] sm:text-[18px]"
          >
            Kirim Tautan Baru
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default AccountVerificationSentPage
