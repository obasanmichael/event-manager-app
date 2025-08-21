"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Link from "next/link";

// Define validation schema
const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(/[^a-zA-Z0-9]/, "Must contain a special character"),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // attach error to confirmPassword field
  });

type SignupFormData = z.infer<typeof signupSchema>;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: SignupFormData) => {
    console.log("Signup data:", data);
    // Call API here
  };

  const password = watch("password");

  // Simple password strength indicator
  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: "" };
    if (password.length < 6) return { strength: 1, label: "Weak" };
    if (password.length < 10) return { strength: 2, label: "Medium" };
    return { strength: 3, label: "Strong" };
  };
  const passwordStrength = getPasswordStrength();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Join thousands of event organizers and attendees
            </p>
          </div>

          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    border-gray-300"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    border-gray-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className="block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      border-gray-300 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
                {password && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            passwordStrength.strength === 1
                              ? "bg-red-500"
                              : passwordStrength.strength === 2
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                          style={{
                            width: `${passwordStrength.strength * 33}%`,
                          }}
                        />
                      </div>
                      <span className="ml-2 text-xs text-gray-600">
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className="block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      border-gray-300 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("agreeToTerms")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.agreeToTerms.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white 
                  ${
                    isSubmitting
                      ? "bg-blue-300"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>
                
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage
