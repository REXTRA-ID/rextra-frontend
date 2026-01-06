'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import Input from '@/components/form/Input'
import { ChangePasswordSchema } from '@/validation/change-password'
import { useChangePassword } from '../hook/useChangePassword'
import NextImage from '@/components/next-image'
import { cn } from '@/lib/utils'

type ChangePasswordForm = z.infer<typeof ChangePasswordSchema>

export default function ChangePasswordForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')

  const methods = useForm<ChangePasswordForm>({
    mode: 'onBlur',
    resolver: zodResolver(ChangePasswordSchema),
  })

  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const { mutate, isPending } = useChangePassword(token)

  const onSubmit = (data: ChangePasswordForm) => {
    mutate(data.new_password, {
      onSuccess: () => router.push('/login'),
    })
  }

  // if (!token) {
  //   return (
  //     <Typography className="text-red-500">
  //       Token tidak valid atau tidak ditemukan
  //     </Typography>
  //   )
  // }

  return (
    <div className="w-full lg:pl-20 lg:pr-28 lg:w-1/2 pr-5 pl-[23px] pt-8 pb-16 max-w-lg lg:max-w-full md:max-w-2xl mx-auto relative">
      <div className="pb-[72px] lg:pb-[40px] pt-6 lg:flex hidden">
        <NextImage
          src="/auth/logo-rextra.webp"
          alt="logo rextra"
          width={176}
          height={49}
          className="left-[72px]"
        />
        <NextImage
          src="/auth/topstar-authlg.svg"
          alt="Wave"
          width={579}
          height={556}
          className={cn(
            'absolute top-0',
            'right-0 w-[579px] max-w-full pointer-events-none select-none hidden lg:block',
          )}
        />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
          <div className="flex flex-col lg:gap-2 md:gap-3 gap-3">
            <div>
              <Typography
                variant="h5"
                className="text-[32px] md:text-[32px] font-bold text-[#212729] leading-[1.4]"
              >
                Ubah Kata Sandi
              </Typography>
            </div>
            <div>
              <Typography
                variant="bt"
                className="text-justify text-sm font-normal text-[#494848] mb-[26px] leading-[1.55]"
              >
                Hi Admin! Masukkan kata sandi baru kamu, dan kamu akan diarahkan
                ke halaman login untuk login kembali.
              </Typography>
            </div>
          </div>

          <div className="mb-6 flex flex-col gap-3">
            <Input
              label="Password Baru"
              id="new_password"
              type="password"
              placeholder="Masukkan password baru"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />

            <Input
              label="Konfirmasi Password"
              id="confirm_password"
              type="password"
              placeholder="Konfirmasi password"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
          </div>
          <Button
            type="submit"
            disabled={!isValid || isPending}
            isLoading={isPending}
            className="w-full bg-[#005DFF] px-4 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <Typography className="text-white text-lg">
                  Memproses
                </Typography>
              </div>
            ) : (
              <Typography className="text-white text-lg">
                Simpan Password
              </Typography>
            )}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
