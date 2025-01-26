import yup from '@/lib/yup'

type MODE = 'production' | 'development' | 'test'

const envSchema = yup.object().shape({
  MODE: yup
    .mixed<MODE>()
    .oneOf(['production', 'development', 'test'])
    .required(),
  API_BASE_URL: yup.string().required(),
  ENABLE_API_DELAY: yup.boolean().optional().default(false),
})

interface Env {
  MODE: MODE
  API_BASE_URL: string
  ENABLE_API_DELAY: boolean
}

const envData = {
  MODE: import.meta.env.VITE_MODE,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENABLE_API_DELAY: import.meta.env.VITE_ENABLE_API_DELAY,
}

const isValid = envSchema.isValidSync(envData)

if (!isValid) {
  console.error('Erro de validação, verifique o .env')
}

const getEnv = () => {
  return envSchema.validateSync(envData, { abortEarly: false })
}

export const env: Env = getEnv()
