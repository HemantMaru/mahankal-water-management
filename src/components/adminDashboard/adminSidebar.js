"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Droplets,
  LayoutDashboard,
  Users,
  Truck,
  FileText,
  IndianRupee,
  PartyPopper,
  BarChart3,
  Settings,
  UserPlus,
  FilePlus2,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Moon,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Today's Delivery", href: "/admin/deliveries", icon: Truck },
  { name: "Monthly Billing", href: "/admin/billing", icon: FileText },
  { name: "Payments", href: "/admin/payments", icon: IndianRupee },
  { name: "Event Orders", href: "/admin/events", icon: PartyPopper },
  { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const quickActions = [
  {
    name: "Customer",
    icon: UserPlus,
    color: "text-blue-600",
    bg: "bg-blue-50",
    hover: "hover:bg-blue-100",
  },
  {
    name: "Delivery",
    icon: Truck,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    hover: "hover:bg-cyan-100",
  },
  {
    name: "Payment",
    icon: IndianRupee,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    hover: "hover:bg-emerald-100",
  },
  {
    name: "Bill",
    icon: FilePlus2,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    hover: "hover:bg-indigo-100",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col justify-between border-r border-slate-200/60 bg-white/70 backdrop-blur-xl lg:flex transition-all duration-300">
      {/* Top Content: Scrollable */}
      <div className="flex flex-col gap-6 overflow-y-auto px-4 py-6 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* 1. BRAND HEADER */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md shadow-blue-500/20">
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity hover:opacity-100"></div>
            <Droplets className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-bold tracking-tight text-slate-900 leading-tight">
              Mahankal RO
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600/80 mt-0.5">
              RO + UV Chilled
            </p>
          </div>
        </div>

        {/* 2. MAIN MENU */}
        <nav className="flex flex-col space-y-1">
          <div className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </div>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative group outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-bg"
                    className="absolute inset-0 rounded-xl bg-blue-50 border border-blue-100/50"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div
                  className={`relative z-10 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                  }`}
                >
                  <item.icon
                    className={`h-4 w-4 transition-colors ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}
                  />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* 3. QUICK ACTIONS */}
        <div className="px-2">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Quick Add
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-100 p-3 shadow-sm transition-all hover:shadow hover:scale-[1.02] ${action.bg} ${action.hover}`}
              >
                <action.icon className={`h-4 w-4 ${action.color}`} />
                <span className="text-[11px] font-medium text-slate-700">
                  {action.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. BUSINESS STATUS CARD */}
        <div className="px-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-lg shadow-slate-900/10">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl"></div>

            <p className="text-xs font-medium text-slate-300 mb-4 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-blue-400" /> Business
              Pulse
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div>
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Deliveries
                  </span>
                </div>
                <p className="text-lg font-bold leading-none">128</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <AlertCircle className="h-3 w-3 text-rose-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Pending
                  </span>
                </div>
                <p className="text-lg font-bold leading-none">14</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">
                    ₹ Revenue
                  </span>
                </div>
                <p className="text-lg font-bold leading-none">84.2k</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                  <Users className="h-3 w-3 text-cyan-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <p className="text-lg font-bold leading-none">342</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content: Fixed at bottom of sidebar */}
      <div className="flex flex-col gap-2 p-4 pb-6 bg-gradient-to-t from-white via-white to-transparent">
        {/* 5. OWNER PROFILE */}
        <div className="mx-2 mt-2 flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/50 p-2 backdrop-blur-md shadow-sm transition-all hover:bg-white hover:shadow-md cursor-pointer">
          <div className="relative">
            <Avatar className="h-10 w-10 border border-slate-200">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">
                HM
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"></span>
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="truncate text-sm font-bold text-slate-900 leading-none">
              Hemant Maru
            </h4>
            <p className="truncate text-xs font-medium text-slate-500 mt-1">
              Owner & Admin
            </p>
          </div>
        </div>

        {/* 6. SIDEBAR FOOTER */}
        <div className="px-2 flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
          <div className="flex gap-1">
            <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900">
              <Moon className="h-4 w-4" />
            </button>
            <button className="relative rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </button>
            <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900">
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600 transition-colors hover:bg-rose-100 hover:text-rose-700">
            <LogOut className="h-4 w-4 ml-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
