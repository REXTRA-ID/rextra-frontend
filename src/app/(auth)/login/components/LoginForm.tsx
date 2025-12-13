'use client'

import NextImage from '@/components/next-image'
import Typography from '@/components/Typography'
import { LoginSchema } from '@/validation/login'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLoginMutation } from '../hook/useLoginMutation'
import Button from '@/components/Button'
import Input from '@/components/form/Input'

export default function LoginForm() {
  const methods = useForm<z.infer<typeof LoginSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
  })

  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const { mutate, isPending } = useLoginMutation()

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    mutate(data)
  }

  return (
    <div className="w-full lg:pl-6 lg:pr-10 lg:w-1/2 pr-5 pl-[23px] pt-8 pb-16 max-w-md lg:max-w-xl md:max-w-lg mx-auto">
      <div className="pb-[72px] lg:pb-[48px] pt-6 lg:flex hidden">
        <NextImage
          src="/auth/logo-rextra.svg"
          alt="logo rextra"
          width={137}
          height={25}
          className="left-[72px]"
        />
      </div>
      <FormProvider {...methods}>
        <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
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
            Hi Sobat Rexi👋Senang bertemu lagi! Yuk, jelajahi REXTRA dengan
            masuk ke akunmu.
          </Typography>

          <div className="flex flex-col gap-3">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Masukkan Email Kamu"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />

            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Masukkan Kata Sandi"
              className="w-full h-[48px] text-black rounded-[10px] font-Poppins font-medium"
              labelTextClasname="max-md:text-[12px] text-[14px] leading-[18px] mb-2 font-Poppins font-medium"
            />
          </div>

          <div className="flex justify-between items-center mt-4 mb-15">
            <label className="flex items-center justify-center gap-2 text-sm cursor-pointer select-none">
              <Input
                id="null"
                type="checkbox"
                className="h-4 w-4 translate-y-[1px]"
              />
              <Typography className="text-[#494848] text-xs font-medium">
                Ingat saya di perangkat ini
              </Typography>
            </label>

            <Typography className="text-xs text-[#3379FF] font-semibold hover:underline cursor-pointer">
              Lupa Password?
            </Typography>
          </div>

          <Button
            type="submit"
            disabled={!isValid || isPending}
            isLoading={isPending}
            className="w-full bg-[#005DFF] px-4 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition"
          >
            <Typography className="text-white text-lg">Masuk</Typography>
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
            Belum punya akun?{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Daftar Disini
            </Link>
          </Typography>
        </form>
      </FormProvider>
    </div>
  )
}
