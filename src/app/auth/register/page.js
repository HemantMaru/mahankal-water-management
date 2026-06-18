"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Droplets,
  User,
  Phone,
  MapPin,
  Map,
  ArrowRight,
  ShieldCheck,
  Truck,
  Users,
  Mail,
  Lock,
  Home,
} from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { registerSchema } from "@/validation/auth.validation";
export default function RegisterPage() {
  const { handleRegister } = useAuth();
  const form = useForm({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      pincode: "",
      password: "",
      confirmPassword: "",
      address: "",
      landmark: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await handleRegister(data);

      if (!response.success) {
        return toast.error(response.message);
      }

      toast.success("Account created successfully");

      form.reset();
    } catch (error) {
      toast.error(error.message || "Registration failed");
    }
  };

  return (
    // Changed to min-h-screen for mobile native scrolling, fixed h-screen for lg
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full bg-white lg:overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      {/* Left Section (Image + Branding) */}
      <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:h-full lg:w-[55%] shrink-0 overflow-hidden bg-slate-900 flex flex-col justify-end p-5 lg:p-10 lg:pb-6 z-10">
        {/* Top Left Logo */}
        <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-30 flex items-center gap-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
            <Droplets className="text-blue-600 w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg lg:text-xl tracking-tight text-white leading-none">
              Mahankal <span className="text-blue-400 italic">RO</span>
            </span>
          </div>
        </div>

        {/* Background Image */}
        <img
          src="/register.png"
          alt="Mahankal RO Delivery Service"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-900/40 lg:to-transparent"></div>

        {/* Floating Content Layer (Now visible on mobile too) */}
        <div className="relative z-20 max-w-xl space-y-3 lg:space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 mt-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 lg:gap-2 bg-[#1d4ed8] px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-white text-[9px] lg:text-[11px] font-bold tracking-[0.1em] uppercase shadow-md">
            <ShieldCheck size={14} className="text-white" />
            Trusted Water Delivery
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Pure Water. <br />
            <span className="text-[#60a5fa] italic">Delivered Daily.</span>
          </h1>

          {/* Description */}
          <p className="text-xs lg:text-sm text-slate-200 leading-relaxed max-w-md font-medium hidden sm:block">
            Join hundreds of families and businesses who trust Mahankal RO + UV
            Chilled Water for unmatched purity and reliability.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3 pt-1">
            {[
              {
                label: "Customers",
                value: "1000+",
                icon: <Users size={16} />,
              },
              {
                label: "Purity",
                value: "99.9%",
                icon: <Droplets size={16} />,
              },
              { label: "Support", value: "24/7", icon: <Truck size={16} /> },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700 p-2 lg:p-4 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <div className="text-[#60a5fa] mb-1 lg:mb-2">{stat.icon}</div>
                <div className="text-base lg:text-2xl font-black text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[8px] lg:text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-[45%] flex-1 lg:h-full lg:overflow-y-auto flex items-center justify-center p-5 sm:p-8 bg-white z-20">
        <div className="w-full max-w-[420px] flex flex-col space-y-4 lg:space-y-4 py-4 lg:py-0">
          {/* Header */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
              Create Account
            </h2>
            <p className="text-xs lg:text-sm font-medium text-slate-500 mt-1">
              Register to manage deliveries and access your dashboard.
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3">
              {/* Full Name */}
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  placeholder="Full Name"
                  {...form.register("name")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />

                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...form.register("email")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />

                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  {...form.register("mobile")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />

                {form.formState.errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Pincode */}
              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  placeholder="Pincode"
                  {...form.register("pincode")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />
                {form.formState.errors.pincode && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.pincode.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  {...form.register("password")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />
                {form.formState.errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...form.register("confirmPassword")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />

                {form.formState.errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Landmark */}
              <div className="relative sm:col-span-2">
                <Map
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  placeholder="Landmark (Optional)"
                  {...form.register("Landmark")}
                  className="pl-10 h-11 lg:h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl font-medium text-sm transition-all"
                />

                {form.formState.errors.landmark && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.landmark.message}
                  </p>
                )}
              </div>

              {/* Address (Textarea) */}
              <div className="relative sm:col-span-2">
                <Home
                  size={16}
                  className="absolute left-3.5 top-3.5 lg:top-3 text-slate-400"
                />
                <textarea
                  {...form.register("address")}
                  placeholder="Complete Delivery Address"
                  className="w-full pl-10 pr-4 py-3 lg:py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-sm min-h-[70px] lg:min-h-[56px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-500"
                ></textarea>
                {form.formState.errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.address.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2 mt-1">
              <Checkbox
                id="terms"
                {...form.register("terms")}
                className="w-4 h-4 rounded-[4px] border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              {form.formState.errors.terms && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.terms.message}
                </p>
              )}

              <label
                htmlFor="terms"
                className="text-xs font-medium text-slate-600 cursor-pointer select-none leading-none"
              >
                I agree to the{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Primary Action */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full h-12 lg:h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-600/20 group transition-all duration-300"
            >
              {form.formState.isSubmitting ? "Creating..." : "Create Account"}

              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-slate-100" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-white px-3 text-slate-400 font-bold tracking-widest">
                  OR
                </span>
              </div>
            </div>

            {/* Google Action */}
            <Button
              variant="outline"
              className="w-full h-12 lg:h-11 border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl text-slate-700 font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs font-medium text-slate-500 pt-1 lg:pt-0">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-700 font-bold hover:underline underline-offset-2"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
