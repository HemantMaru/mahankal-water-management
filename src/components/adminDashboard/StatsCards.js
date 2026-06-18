import React from "react";
import {
  Users,
  Truck,
  CreditCard,
  TrendingUp,
  Droplet,
  CalendarCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    label: "Total Customers",
    value: "1,284",
    trend: "+12%",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    label: "Today's Deliveries",
    value: "452",
    trend: "+5.4%",
    icon: Truck,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    label: "Pending Payments",
    value: "₹12.4k",
    trend: "-2.1%",
    icon: CreditCard,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    label: "Monthly Revenue",
    value: "₹8.2L",
    trend: "+18%",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    label: "Delivered Cans",
    value: "3,120",
    trend: "+8%",
    icon: Droplet,
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    label: "Active Subs",
    value: "942",
    trend: "+4%",
    icon: CalendarCheck,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-[24px] group overflow-hidden bg-white"
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div
                className={
                  stat.bg +
                  " p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300"
                }
              >
                <stat.icon className={stat.color} size={22} />
              </div>
              <span
                className={
                  idx === 2
                    ? "text-amber-500 font-bold text-xs"
                    : "text-emerald-500 font-bold text-xs"
                }
              >
                {stat.trend}
              </span>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>

            {/* Minimal Trend visualization placeholder */}
            <div className="mt-4 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
              <div
                className={
                  stat.color.replace("text", "bg") +
                  " h-full w-[70%] opacity-20"
                }
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
