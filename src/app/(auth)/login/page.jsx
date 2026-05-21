"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const handleFormSubmit = async data => {
    const { email, password } = data;
    const {data: res, error} = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/"
    });
    console.log(res, error);
    if(error) {
      alert(error.message);
    }
    if(res) {
      alert("Login successful!");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-[80vh]"> 
      <div>
        <form className="text-center" onSubmit={handleSubmit(handleFormSubmit)}>
        <label className="label">
          <span className="label-text text-2xl font-bold mb-4">Login your account</span>
        </label>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
           
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email")} />

  <label className="label">Password</label>
  <input  type={showPassword ? "text" : "password"} className="input" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at  8 characters" } })} />
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
  <button className="btn btn-neutral mt-4">Login</button>
  <p className="mt-4">Don't have an account? <Link href="/resgister" className="text-secondary">Register</Link></p>
  <p></p>
</fieldset>
</form>
</div>
    </div>
  )
}

export default LoginPage