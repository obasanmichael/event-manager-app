"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpWithEmail } from "@/lib/auth";
import toast from "react-hot-toast";
import { AuthCard } from "@/app/components/auth/AuthCard";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Label } from "@/app/components/ui/Label";
import { cn } from "@/lib/utils";

const signupSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
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
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const password = watch("password");

  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: "" };
    if (password.length < 6) return { strength: 1, label: "Weak" };
    if (password.length < 10) return { strength: 2, label: "Medium" };
    return { strength: 3, label: "Strong" };
  };
  const passwordStrength = getPasswordStrength();

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signUpWithEmail(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      );
      toast.success("Account created successfully!");
      router.push("/login");
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <AuthCard
      title="Create your account"
      description="Join organizers building unforgettable events"
      footer={
        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" {...register("firstName")} className="mt-1.5" />
            {errors.firstName && (
              <p className="mt-1 text-xs text-destructive">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" {...register("lastName")} className="mt-1.5" />
            {errors.lastName && (
              <p className="mt-1 text-xs text-destructive">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} className="mt-1.5" />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-1.5">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>
          )}
          {password && (
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    passwordStrength.strength === 1 && "bg-destructive w-1/3",
                    passwordStrength.strength === 2 && "bg-amber-500 w-2/3",
                    passwordStrength.strength === 3 && "bg-emerald-500 w-full"
                  )}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {passwordStrength.label}
              </span>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <div className="relative mt-1.5">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              className="pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              {...register("agreeToTerms")}
              className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-ring"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-1 text-xs text-destructive">
              {errors.agreeToTerms.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          <UserPlus className="h-4 w-4" />
          {isSubmitting ? "Creating..." : "Create account"}
        </Button>
      </form>
    </AuthCard>
  );
}
