"use client"
import Link from "next/link";
import { useForm } from "react-hook-form"
const RegisterPage = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const handleFormSubmit = data => console.log(data);
  return (
    <div className="flex items-center justify-center min-h-[80vh]"> 
      <div>
        <form className="text-center" onSubmit={handleSubmit(handleFormSubmit)}>
        <label className="label">
          <span className="label-text text-2xl font-bold mb-4">Register your account</span>
        </label>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email")} />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at  8 characters" } })} />
    {errors.password && <span className="text-error">{errors.password.message}</span>}
  <button className="btn btn-neutral mt-4">Register</button>
  <p className="mt-4">Already have an account? <Link href="/login" className="text-secondary">Login</Link></p>
  <p></p>
</fieldset>
</form>
</div>
    </div>
  )
}

export default RegisterPage