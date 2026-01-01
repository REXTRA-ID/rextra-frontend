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
import toast from 'react-hot-toast'
import { useForgetPasswordMutation } from '../../reset-password/hook/useForgotPassword'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLoginWithGoogleMutation } from '../hook/useLoginMutationFirebase'

export default function LoginForm() {
  const methods = useForm<z.infer<typeof LoginSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(LoginSchema),
  })

  const router = useRouter()

  const {
    handleSubmit,
    formState: { isValid },
    getValues,
  } = methods

  const { mutate, isPending } = useLoginMutation()
  const { mutate: loginWithGoogle, isPending: isFirebasePending } =
    useLoginWithGoogleMutation()

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    mutate(data)
  }

  const { mutate: forgetPassword, isPending: isForgetPending } =
    useForgetPasswordMutation()

  const handleForgetPassword = () => {
    const email = getValues('email')

    if (!email) {
      toast.error('Silakan masukkan email terlebih dahulu')
      return
    }

    forgetPassword(email, {
      onSuccess: () => {
        router.push('/reset-password')
      },
    })
  }

  return (
    <div className="w-full lg:pl-6 lg:pr-10 lg:w-1/2 pr-5 pl-[23px] pt-8 pb-16 max-w-lg lg:max-w-xl md:max-w-2xl mx-auto relative">
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
        <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:gap-2 md:gap-3 gap-3">
            <div>
              <Typography
                variant="h5"
                className="text-[32px] md:text-xl font-bold text-[#212729] leading-[1.4]"
              >
                Selamat Datang Kembali!
              </Typography>
            </div>
            <div>
              <Typography
                variant="bt"
                className="text-justify text-sm font-normal text-[#494848] mb-[26px] leading-[1.55]"
              >
                Hi Sobat Rexi👋Senang bertemu lagi! Yuk, jelajahi REXTRA dengan
                masuk ke akunmu.
              </Typography>
            </div>
          </div>

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

            <button
              type="button"
              onClick={handleForgetPassword}
              disabled={isForgetPending}
            >
              <Typography className="text-xs text-[#3379FF] font-semibold hover:underline bg-transparent">
                {/* {isForgetPending ? 'Mengirim...' : 'Lupa Password?'} */}
                Lupa Password?
              </Typography>
            </button>
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
              <Typography className="text-white text-lg">Masuk</Typography>
            )}
          </Button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#8A8C90]"></div>
            <Typography className="text-xs text-[#212729] font-normal">
              Atau masuk dengan
            </Typography>
            <div className="flex-1 h-px bg-[#8A8C90]"></div>
          </div>

          <Button
            onClick={() => loginWithGoogle()}
            disabled={isFirebasePending}
            isLoading={isFirebasePending}
            className="w-full border border-[#111415] border-[0.5] px-4 py-3 rounded-[10px] flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <NextImage
              width={25}
              height={25}
              src="/auth/google-logo.svg"
              alt="Google"
              className="mr-2"
            />
            {isFirebasePending ? (
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                <Typography className="text-white text-lg">
                  Memproses
                </Typography>
              </div>
            ) : (
              <Typography className="text-white text-lg text-black">
                Google
              </Typography>
            )}
          </Button>

          <Typography className="text-center text-sm text-gray-600 mt-6">
            Belum punya akun?{' '}
            <Link href="/register" className="text-blue-600 hover:underline">
              Daftar Disini
            </Link>
          </Typography>
        </form>
      </FormProvider>
    </div>
  )
}
