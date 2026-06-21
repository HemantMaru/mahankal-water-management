import React from "react";
import {
  PlusCircle,
  Calendar,
  MessageSquare,
  LifeBuoy,
  UserPlus,
  Zap,
} from "lucide-react";

const actions = [
  {
    icon: PlusCircle,
    label: "Order Water",
    desc: "Instant jar request",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Calendar,
    label: "Schedule",
    desc: "Daily deliveries",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: MessageSquare,
    label: "Complaint",
    desc: "Raise a ticket",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: LifeBuoy,
    label: "Support",
    desc: "24/7 assistance",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: UserPlus,
    label: "Refer Friend",
    desc: "Earn points",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function QuickActions() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300 group text-left"
          >
            <div
              className={
                action.color +
                " p-3 rounded-2xl group-hover:scale-110 transition-transform shadow-sm"
              }
            >
              <action.icon size={20} />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900 leading-tight">
                {action.label}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                {action.desc}
              </div>
            </div>
            <Zap
              size={14}
              className="ml-auto text-slate-200 group-hover:text-amber-400 group-hover:fill-amber-400 transition-colors"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
