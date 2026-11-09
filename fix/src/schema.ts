import { z } from 'zod'

export const visitSchema = z.object({
  tesis: z.string().min(1, 'Ziyaret edilecek tesisi seçin.'),
  kurum: z.string().trim().min(1, 'Ziyaret edecek kurumu veya kişiyi yazın.'),
  ad: z.string().trim().min(1, 'Adınızı yazın.'),
  soyad: z.string().trim().min(1, 'Soyadınızı yazın.'),
  eposta: z
    .string()
    .trim()
    .min(1, 'E-posta adresinizi yazın.')
    .email('E-posta adresi geçerli değil. Örnek: ad@ornek.com'),
  telefon: z
    .string()
    .trim()
    .min(1, 'Telefon numaranızı yazın.')
    .regex(
      /^(\+90|0)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
      'Telefon numarası geçerli değil. Örnek: 0555 123 45 67',
    ),
  adres: z.string().trim().min(1, 'Adresinizi yazın.'),
  zaman: z
    .string()
    .min(1, 'Ziyaret tarihini ve saatini seçin.')
    .refine((v) => new Date(v) > new Date(), 'Ziyaret zamanı ileri bir tarih olmalı.'),
  katilimci: z
    .string()
    .trim()
    .min(1, 'Katılımcı sayısını yazın.')
    .refine(
      (v) => /^\d+$/.test(v) && Number(v) >= 1 && Number(v) <= 100,
      'Katılımcı sayısı 1 ile 100 arasında bir sayı olmalı.',
    ),
  mesaj: z.string().trim().max(500, 'Mesaj en fazla 500 karakter olabilir.'),
})

export type VisitForm = z.infer<typeof visitSchema>