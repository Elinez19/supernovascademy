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
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    setIsLoading(true);

    // Simulate API call
    new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => {
        toast.success("Account created successfully!");
        console.log("Signup data:", data);
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to create account. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#FF8C42] via-[#FF6B35] to-[#F7931E] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold mb-4">Supernovas Academy</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Join Thousands of Students
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Master competitive exams with our comprehensive study platform,
              featuring practice tests, detailed solutions, and personalized
              learning paths to maximize your success.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center text-xs font-semibold">
                  +2K
                </div>
              </div>
              <span className="text-sm opacity-80">
                Students already joined
              </span>
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
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-black">
                Sign Up
              </CardTitle>
              <CardDescription className="text-gray-600">
                Join thousands of students preparing for competitive exams
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
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-medium">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="pl-10 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="pl-10 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-medium">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                              className="pl-10 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-medium">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <Input
                              type="password"
                              placeholder="Confirm your password"
                              {...field}
                              className="pl-10 border-gray-300 focus:border-[#FF6B35] focus:ring-[#FF6B35]/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-[#f05406] to-[#F7931E] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-medium py-2.5 transition-all duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
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
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign Up Button */}
              <Button
                type="button"
                variant="outline"
                className="w-full py-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium  transition-all duration-200"
                onClick={() => {
                  toast.info("Google sign-up coming soon!");
                }}
              >
                <FcGoogle className="w-5 h-5 mr-2" size={20} color="#FF0000" />
                Sign up with Google
              </Button>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
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
