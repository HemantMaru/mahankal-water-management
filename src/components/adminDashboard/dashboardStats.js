import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Truck,
  AlertCircle,
  TrendingUp,
  Droplet,
  PartyPopper,
} from "lucide-react";

const statsData = [
  {
    title: "Total Customers",
    value: "342",
    trend: "+12 this month",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Today's Deliveries",
    value: "128",
    trend: "45 pending",
    icon: Truck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Pending Payments",
    value: "₹12,450",
    trend: "14 customers",
    icon: AlertCircle,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Monthly Revenue",
    value: "₹84,200",
    trend: "+8.2% from last month",
    icon: TrendingUp,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Cans Delivered",
    value: "2,845",
    trend: "Current month",
    icon: Droplet,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Event Orders",
    value: "8",
    trend: "3 this week",
    icon: PartyPopper,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
        >
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {stat.value}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{stat.trend}</p>
            </div>
            <div
              className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}
            >
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
