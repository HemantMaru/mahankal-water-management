import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserPlus,
  Truck,
  CreditCard,
  FileText,
  UserCheck,
  Zap,
  MessageSquare,
  PackageCheck,
} from "lucide-react";

const actions = [
  {
    icon: UserPlus,
    label: "New Order",
    desc: "Place quick order",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    label: "Add Customer",
    desc: "Register account",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Zap,
    label: "Schedule",
    desc: "Daily delivery",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileText,
    label: "Reports",
    desc: "Gen analytics",
    color: "bg-purple-50 text-purple-600",
  },
];

const activities = [
  {
    icon: Truck,
    label: "Fleet #04 departed",
    desc: "For Zone 2 • Nanakheda",
    time: "Just now",
    color: "text-blue-500",
  },
  {
    icon: CreditCard,
    label: "Payment received",
    desc: "From ABC Corp • ₹12k",
    time: "12 mins ago",
    color: "text-emerald-500",
  },
  {
    icon: MessageSquare,
    label: "Maintenance Alert",
    desc: "RO Filter #2 needs QC",
    time: "1 hour ago",
    color: "text-amber-500",
  },
  {
    icon: PackageCheck,
    label: "New enterprise client",
    desc: "TechSol registered",
    time: "2 hours ago",
    color: "text-primary",
  },
];

export default function RightPanel() {
  return (
    <div className="space-y-8 h-full">
      {/* Quick Actions */}
      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-xl font-black text-slate-900 tracking-tight">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-4">
          <div className="grid grid-cols-2 gap-4">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center text-center p-5 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div
                  className={
                    action.color +
                    " p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-sm"
                  }
                >
                  <action.icon size={20} />
                </div>
                <span className="text-sm font-black text-slate-900">
                  {action.label}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {action.desc}
                </span>
              </button>
            ))}
          </div>

          <button className="w-full mt-6 py-4 rounded-[20px] bg-slate-900 text-white font-black text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
            Broadcast Alert
            <Zap
              size={16}
              className="fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform"
            />
          </button>
        </CardContent>
      </Card>

      {/* Live Activity */}
      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white flex-1">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-xl font-black text-slate-900 tracking-tight">
            Live Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-4">
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100" />

            {activities.map((activity, idx) => (
              <div key={idx} className="relative flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center shadow-sm z-10 group-hover:border-primary transition-colors">
                  <activity.icon className={activity.color} size={20} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-slate-900">
                      {activity.label}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Insights */}
      <Card className="border-none bg-primary shadow-2xl shadow-primary/20 rounded-[32px] overflow-hidden text-white relative">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <CardContent className="p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <span className="text-lg font-black tracking-tight">
              AI Insights
            </span>
          </div>
          <p className="text-white/80 font-bold text-sm leading-relaxed italic">
            "Your revenue is projected to grow by 12% this week based on
            increased event bookings in Zone 4."
          </p>
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Top Customer
              </div>
              <div className="font-black text-sm">Hotel Grand</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Active Area
              </div>
              <div className="font-black text-sm">Freeganj</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { TrendingUp } from "lucide-react";
