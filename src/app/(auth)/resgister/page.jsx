"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const handleFormSubmit = async data => {
    const { name, email, password } = data;
    const {data:res, error} = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      callbackURL: "/login"
    })
    console.log(res, error);
    if(error) {
      alert(error.message);
    }
    if(res) {
      alert("Registration successful! Please check your email to verify your account.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh]"> 
      <div>
        <form className="text-center" onSubmit={handleSubmit(handleFormSubmit)}>
        <label className="label">
          <span className="label-text text-2xl font-bold mb-4">Register your account</span>
        </label>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Your name</label>
  <input type="text" className="input" placeholder="Your name" {...register("name")} />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email")} />

  <label className="label">Password</label>
  <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at  8 characters" } })} />
    {errors.password && <span className="text-error">{errors.password.message}</span>}
  <label className="label cursor-pointer">
    <input
      type="checkbox"
      className="checkbox"
      checked={showPassword}
      onChange={() => setShowPassword(!showPassword)}
    />
    <span className="label-text">Show Password</span>
  </label>
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