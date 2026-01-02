'use client'

import NextImage from '@/components/next-image'
import Typography from '@/components/Typography'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/Button'
import Input from '@/components/form/Input'
import { useRegisterMutation } from '../hook/useRegisterMutation'
import { RegisterSchema } from '@/validation/register'
import { cn } from '@/lib/utils'

export default function RegisterForm() {
  const methods = useForm<z.infer<typeof RegisterSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(RegisterSchema),
  })

  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const { mutate, isPending } = useRegisterMutation()

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    mutate(data)
  }

  return (
    <div className="w-full lg:pl-16 lg:pr-20 lg:w-1/2 pr-5 pl-[23px] pt-8 pb-16 max-w-lg lg:max-w-full md:max-w-2xl mx-auto relative">
      <div className="pb-[72px] lg:pb-[40px] pt-6 lg:flex hidden">
        <NextImage
          src="/auth/logo-rextra.svg"
          alt="logo rextra"
          width={137}
          height={25}
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
        <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:gap-2 md:gap-3 gap-3">
            <div>
              <Typography
                variant="h5"
                className="text-[32px] md:text-xl font-bold text-[#212729] leading-[1.4]"
              >
                Daftar Akun REXTRA
              </Typography>
            </div>
            <div>
              <Typography
                variant="bt"
                className="text-justify text-sm font-normal text-[#494848] mb-[26px] leading-[1.55]"
              >
                Yuk, buat akun untuk mulai persiapan dan wujudkan karier digital
                impian bersama REXTRA!
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              label="Nama Lengkap"
              id="fullname"
              placeholder="Masukkan Nama Lengkap Kamu"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />

            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Masukkan Alamat Email Kamu"
              validation={{
                required: 'Email harus diisi',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Format email tidak valid',
                },
              }}
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
            <Input
              label="Kata Sandi"
              id="password"
              type="password"
              placeholder="Masukkan Kata Sandi Kamu"
              validation={{
                required: 'Kata sandi harus diisi',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    'Password minimal 8 karakter dan harus mengandung huruf besar, huruf kecil, dan angka',
                },
              }}
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
            <Input
              label="Konfirmasi Kata Sandi"
              id="confirmPassword"
              type="password"
              placeholder="Konfirmasi Kata Sandi"
              validation={{
                required: 'Kata sandi harus diisi',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    'Password minimal 8 karakter dan harus mengandung huruf besar, huruf kecil, dan angka',
                },
              }}
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
            <Input
              label="Nomor Telepon"
              id="phone_number"
              type="text"
              placeholder="Masukkan Nomor Telepon"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
          </div>

          <div className="flex justify-between items-center my-5">
            <label className="flex items-center justify-center gap-4 cursor-pointer text-[16px] select-none">
              <Input
                id="null"
                type="checkbox"
                className="h-5 w-5 translate-y-[1px]"
              />
              <Typography className="text-[#494848] font-regular">
                Dengan mendaftar, saya menyetujui syarat dan ketentuan yang
                berlaku
              </Typography>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!isValid || isPending}
            className="w-full bg-[#005DFF] px-4 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <Typography className="text-white text-lg">
                  Memproses
                </Typography>
              </div>
            ) : (
              <Typography className="text-white text-lg">Daftar</Typography>
            )}
          </Button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#8A8C90]"></div>
            <Typography className="text-xs text-[#212729] font-normal">
              Atau masuk dengan
            </Typography>
            <div className="flex-1 h-px bg-[#8A8C90]"></div>
          </div>

          <Button className="w-full border border-[#111415] border-[0.5] px-4 py-3 rounded-[10px] flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <NextImage
              width={25}
              height={25}
              src="/auth/google-logo.svg"
              alt="Google"
              className="mr-2"
            />
            <Typography className="font-normal text-lg">Google</Typography>
          </Button>

          <Typography className="text-center text-sm text-gray-600 mt-6">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Masuk Disini
            </Link>
          </Typography>
        </form>
      </FormProvider>
    </div>
  )
}
