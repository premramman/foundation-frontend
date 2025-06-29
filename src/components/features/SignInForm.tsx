"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInSchema } from "@/schemas/signInSchema";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';
import appConfig from "@/app.config";
import BrandLogo from "./BrandLogo";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInSchema) => {
    // handle sign in logic
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto w-full bg-white p-6 rounded-lg shadow-md space-y-6"
      aria-label="Sign in form"
    >
      <div className="flex justify-center mb-6">
        <BrandLogo size={64} />
      </div>
      
      <h1 className="text-2xl text-center mb-1">Sign in</h1>
      <p className="text-center text-muted-foreground mb-6">Please enter your details to sign in</p>

      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          aria-label="Sign in with Google"
          className="p-2"
        >
          <FcGoogle size={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-label="Sign in with Facebook"
          className="p-2 text-[#1877F2] hover:text-[#1877F2]"
        >
          <FaFacebookF size={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-label="Sign in with Microsoft"
          className="p-2 text-[#007FFF] hover:text-[#007FFF]"
        >
          <TfiMicrosoftAlt size={20} />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Separator className="flex-1" />
        <span className="text-gray-500 text-sm">or</span>
        <Separator className="flex-1" />
      </div>


      <div>
        <Label htmlFor="email" className="mb-2 font-normal">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="mb-2 font-normal">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-2 text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="text-red-600 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" {...register("remember")} />
          <Label htmlFor="remember" className="font-normal">Remember me</Label>
        </div>
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Sign In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/sign-up" className="text-blue-600 underline">
          Sign up
        </Link>
      </p>
      
    </form>
  );
}





// For a nextjs create responsive Sign up form using shadecn. The form has email, password. password field should have functionality to show/hide password. It also allows user to sign up using google, facebook and microsoft. For validation use react form hook and zod. For icons use react-icons. Keep sign up form component separate from page.ts. Form should be elegant and should also work in mobile and tablet devices. Oauth buttons should have only icons. use line with "or signup using" to separate Oauth buttons. All fields should adhere to accessibility standards. At the end of the form ask user "Already have an account ?" and provide a link to sign in page. The form should have a title saying "Sign up" with a secondary text below welcoming the user. use a brand logo horizontally centered at the top