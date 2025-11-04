"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { ArrowLeftIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    setIsLoading(true);

    // Simulate API call
    new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => {
        toast.success("Password reset link sent to your email!");
        setEmailSent(true);
        console.log("Forgot password data:", data);
      })
      .catch(() => {
        toast.error("Failed to send reset link. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex">
        {/* Left Side - Gradient Background */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#FF8C42] via-[#FF6B35] to-[#F7931E] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold mb-4">Supernovas Academy</h1>
              <h2 className="text-2xl font-semibold mb-4">Check Your Email</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                We&apos;ve sent you a secure link to reset your password. Check
                your inbox and follow the instructions to regain access to your
                account.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm opacity-80">
                    Email sent successfully
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="text-center mb-8 lg:hidden">
              <h1 className="text-3xl font-bold text-black mb-2">
                Supernovas Academy
              </h1>
            </div>

            <Card className="border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-black">
                  Check Your Email
                </CardTitle>
                <CardDescription className="text-gray-600">
                  We&apos;ve sent a password reset link to your email address
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Please check your email and click the link to reset your
                  password. If you don&apos;t see the email, check your spam
                  folder.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full border-gray-300 text-black hover:bg-gray-50"
                  >
                    Try Another Email
                  </Button>
                  <Link href="/signin">
                    <Button
                      variant="ghost"
                      className="w-full text-gray-600 hover:text-[#FF6B35]"
                    >
                      Back to Sign In
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#FF6B35] transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#FF8C42] via-[#FF6B35] to-[#F7931E] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#FF8C42] via-[#FF6B35] to-[#F7931E]"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold mb-4">Supernovas Academy</h1>
            <h2 className="text-2xl font-semibold mb-4">Reset Your Password</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Don&apos;t worry, it happens to the best of us. Enter your email
              address and we&apos;ll send you a secure link to reset your
              password and get you back on track.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm opacity-80">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm opacity-80">Quick Recovery</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 lg:hidden">
            <h1 className="text-3xl font-bold text-black mb-2">
              Supernovas Academy
            </h1>
            <p className="text-gray-600">Reset your password</p>
          </div>

          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-black">
                Forgot Password
              </CardTitle>
              <CardDescription className="text-gray-600">
                Enter your email address and we&apos;ll send you a link to reset
                your password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                            className="border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-medium py-2.5 transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              </Form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or try signing in with
                  </span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium py-2.5 transition-all duration-200"
                onClick={() => {
                  toast.info("Google sign-in coming soon!");
                }}
              >
                <FcGoogle className="w-5 h-5 mr-2" size={20} color="#FF0000" />
                Sign in with Google
              </Button>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Remember your password?{" "}
                  <Link
                    href="/signin"
                    className="text-[#FF6B35] font-medium hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
