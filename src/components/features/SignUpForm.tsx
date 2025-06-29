'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchema } from '@/schemas/signUpSchema';
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

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchema) => {
    // handle sign up logic
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto w-full bg-white p-6 rounded-lg shadow-md space-y-6"
      aria-label="Sign up form"
    >
      <div className="flex justify-center mb-6">
        <BrandLogo size={64} />
      </div>

      <h1 className="text-2xl text-center mb-1">Sign up</h1>
      <p className="text-center text-muted-foreground mb-6">Create your account below to get started</p>

      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          aria-label="Sign up with Google"
          className="p-2"
        >
          <FcGoogle size={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-label="Sign up with Facebook"
          className="p-2 text-[#1877F2] hover:text-[#1877F2]"
        >
          <FaFacebookF size={20} />
        </Button>
        <Button
          type="button"
          variant="outline"
          aria-label="Sign up with Microsoft"
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Sign Up
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-blue-600 underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}