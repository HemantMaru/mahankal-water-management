"use client";

import {
  Package,
  Droplets,
  Truck,
  Wallet,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "148",
    change: "+12%",
    icon: Package,
  },
  {
    title: "Active Subscription",
    value: "Gold Plan",
    change: "Active",
    icon: Droplets,
  },
  {
    title: "Pending Deliveries",
    value: "3",
    change: "Today",
    icon: Truck,
  },
  {
    title: "Wallet Balance",
    value: "₹1,250",
    change: "+₹300",
    icon: Wallet,
  },
  {
    title: "Reward Points",
    value: "2,840",
    change: "+120",
    icon: Award,
  },
  {
    title: "Monthly Usage",
    value: "420L",
    change: "+8%",
    icon: TrendingUp,
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                  {item.change}
                </span>

                <span className="text-xs text-slate-500">vs last month</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
