import { z } from 'zod'

export const RegisterSchema = z
  .object({
    fullname: z.string().min(3, 'Nama minimal 3 karakter'),
    email: z.string().email('Email tidak valid'),

    password: z
      .string()
      .min(8, 'Password minimal 8 karakter')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        'Password harus mengandung huruf besar, huruf kecil, dan angka',
      ),

    confirmPassword: z.string(),

    kode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Konfirmasi password tidak sama',
    path: ['confirmPassword'],
  })
