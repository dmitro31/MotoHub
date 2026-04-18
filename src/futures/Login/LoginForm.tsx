import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginUser } from "./api/login.api"
import { type loginFormData, loginSchema } from "./schemas/login.schema"
import { useState } from "react"
import { useAuth } from "../../context/Auth.context"
import { Link, useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const [serverError, setServerError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const { login } = useAuth();

 

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: loginFormData) => {
    try {
      setServerError(null)
      await loginUser(data)
      setTimeout(() => {
        navigate("/")
      } , 3000)
      login()
      setSuccess(true)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError("Невідома помилка")
      }
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Вхід</h2>

        {success && (
          <p className="text-green-600 text-center mb-4">Успішно!</p>
        )}

        {serverError && (
          <p className="text-red-500 text-center mb-4">{serverError}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("password")}
              placeholder="Пароль"
              type="password"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Завантаження..." : "Увійти"}
          </button>
          <div className=" ">
            <Link to = "/register" className=' object-center'><h2>Не маєте акаунта?Реєстрація</h2></Link>
          </div>
        </form>
      </div>
    </div>
  )
  
}