import NextImage from '@/components/next-image'
import { cn } from '@/lib/utils'
import React from 'react'
import ForgotForm from './components/ForgotForm'

export default function RextraForgotPassword() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden relative">
      {/* Header Banner */}
      <div className="w-full lg:w-1/2 bg-transparent lg:bg-[#005DFF] text-white p-6 flex flex-col items-center text-center relative overflow-hidden lg:order-2">
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
          src="/auth/mascot-rextra.png"
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
        src="/auth/rightstar-auth.svg"
        alt="Wave"
        width={674}
        height={667}
        className={cn(
          'absolute bottom-0',
          'right-0 w-[674px] max-w-sm sm:max-w-md pointer-events-none select-none lg:hidden flex',
        )}
      />

      <NextImage
        src="/auth/topstar-auth.svg"
        alt="Wave"
        width={579}
        height={559}
        className={cn(
          'absolute top-0',
          'left-0 w-[579px] max-w-sm sm:max-w-md pointer-events-none select-none lg:hidden flex',
        )}
      />

      <NextImage
        src="/auth/leftstar-authlg.svg"
        alt="Wave"
        width={570}
        height={551}
        className={cn(
          'absolute bottom-0',
          'left-0 w-[570px] max-w-full pointer-events-none select-none hidden lg:flex',
        )}
      />

      <ForgotForm />
    </div>
  )
}
