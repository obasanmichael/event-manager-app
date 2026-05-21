"use client";

import { signInWithEmail } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { AuthCard } from "@/app/components/auth/AuthCard";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Label } from "@/app/components/ui/Label";

const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signInWithEmail(data.email, data.password);
      toast.success("Logged in successfully!");
      router.push("/");
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <AuthCard
      title="Welcome back"
      description="Sign in to manage your events"
      footer={
        <p className="text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign up
          </Link>
        </p>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
            />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          <LogIn className="h-4 w-4" />
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </AuthCard>
  );
}
