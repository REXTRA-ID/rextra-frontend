// validation/change-password.ts
import { z } from 'zod'

export const ChangePasswordSchema = z
  .object({
    new_password: z
      .string()
      .min(8, 'Password minimal 8 karakter')
      .regex(/[A-Z]/, 'Harus mengandung huruf besar')
      .regex(/[0-9]/, 'Harus mengandung angka'),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: 'Password tidak sama',
    path: ['confirm_password'],
  })
