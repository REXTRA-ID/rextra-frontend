import { Poppins as Poppin } from 'next/font/google'
import { Montserrat as Mont } from 'next/font/google'
// import localFont from 'next/font/local'

export const Poppins = Poppin({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-Poppins',
})

export const Montserrat = Mont({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-Montserrat',
})
