import { useState } from 'react'
import type { FormEvent } from 'react'
import { visitSchema } from './schema'
import './App.css'

type Name =
  | 'tesis' | 'kurum' | 'ad' | 'soyad' | 'eposta'
  | 'telefon' | 'adres' | 'zaman' | 'katilimci' | 'mesaj'
type Values = Record<Name, string>
type Errors = Partial<Values>

type Field = {
  name: Name
  label: string
  kind: 'input' | 'select' | 'textarea'
  type?: string
  required: boolean
  hint?: string
}

const emptyValues: Values = {
  tesis: '', kurum: '', ad: '', soyad: '', eposta: '',
  telefon: '', adres: '', zaman: '', katilimci: '', mesaj: '',
}


const facilities = ['Hayvanat Bahçesi', 'Bilim Merkezi', 'Kütüphane']

const fields: Field[] = [
  { name: 'tesis', label: 'Ziyaret edilecek tesis', kind: 'select', required: true },
  { name: 'kurum', label: 'Ziyaret edecek kurum / kişi', kind: 'input', type: 'text', required: true },
  { name: 'ad', label: 'Adı', kind: 'input', type: 'text', required: true },
  { name: 'soyad', label: 'Soyadı', kind: 'input', type: 'text', required: true },
  { name: 'eposta', label: 'E-posta', kind: 'input', type: 'email', required: true },
  { name: 'telefon', label: 'Telefon', kind: 'input', type: 'tel', required: true, hint: 'Örnek: 0555 123 45 67' },
  { name: 'adres', label: 'Adres', kind: 'textarea', required: true },
  { name: 'zaman', label: 'Talep edilen ziyaret zamanı', kind: 'input', type: 'datetime-local', required: true },
  { name: 'katilimci', label: 'Katılımcı sayısı', kind: 'input', type: 'number', required: true, hint: '1 ile 100 arasında' },
  { name: 'mesaj', label: 'Mesajınız (opsiyonel)', kind: 'textarea', required: false },
]

function App() {
  const [values, setValues] = useState<Values>(emptyValues)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  function handleChange(name: Name, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setDone(false)

    const result = visitSchema.safeParse(values)

    if (result.success) {
      setErrors({})
      setDone(true)
      return
    }

   
    const newErrors: Errors = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as Name
      if (!newErrors[key]) newErrors[key] = issue.message
    }
    setErrors(newErrors)

    
    const firstInvalid = fields.find((f) => newErrors[f.name])
    if (firstInvalid) document.getElementById(firstInvalid.name)?.focus()
  }

  return (
    <main>
      <h1>Tesis Ziyaret Formu</h1>
      <p className="note">* zorunlu alan</p>

      <form onSubmit={handleSubmit} noValidate>
        {fields.map((f) => {
          const error = errors[f.name]
          const describedBy =
            [f.hint ? `${f.name}-hint` : '', error ? `${f.name}-error` : '']
              .filter(Boolean)
              .join(' ') || undefined

          const common = {
            id: f.name,
            name: f.name,
            value: values[f.name],
            'aria-required': f.required ? ('true' as const) : undefined,
            'aria-invalid': error ? ('true' as const) : ('false' as const),
            'aria-describedby': describedBy,
          }

          return (
            <div className="field" key={f.name}>
              <label htmlFor={f.name}>
                {f.label}{' '}
                {f.required && <span aria-hidden="true">*</span>}
              </label>

              {f.kind === 'select' && (
                <select {...common} onChange={(e) => handleChange(f.name, e.target.value)}>
                  <option value="">Seçiniz...</option>
                  {facilities.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              )}

              {f.kind === 'textarea' && (
                <textarea {...common} rows={3} onChange={(e) => handleChange(f.name, e.target.value)} />
              )}

              {f.kind === 'input' && (
                <input {...common} type={f.type} onChange={(e) => handleChange(f.name, e.target.value)} />
              )}

              {f.hint && <small id={`${f.name}-hint`} className="hint">{f.hint}</small>}
              {error && <p id={`${f.name}-error`} className="error">{error}</p>}
            </div>
          )
        })}

        <button type="submit">Gönder</button>
      </form>

      <p role="status" className="success">
        {done ? 'Form doğrulandı. (Bu demo bir istek göndermez.)' : ''}
      </p>
    </main>
  )
}

export default App