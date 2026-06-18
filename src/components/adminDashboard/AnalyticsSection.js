import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 420000 },
  { name: "Feb", revenue: 510000 },
  { name: "Mar", revenue: 480000 },
  { name: "Apr", revenue: 620000 },
  { name: "May", revenue: 590000 },
  { name: "Jun", revenue: 820000 },
];

const deliveryData = [
  { name: "Mon", regular: 320, chilled: 180 },
  { name: "Tue", regular: 350, chilled: 220 },
  { name: "Wed", regular: 280, chilled: 140 },
  { name: "Thu", regular: 410, chilled: 260 },
  { name: "Fri", regular: 380, chilled: 240 },
  { name: "Sat", regular: 450, chilled: 310 },
  { name: "Sun", regular: 210, chilled: 450 },
];

export default function AnalyticsSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-xl font-black text-slate-900 tracking-tight">
            Monthly Revenue
          </CardTitle>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
            Growth in INR
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                  tickFormatter={(val) => `₹${val / 100000}L`}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    fontWeight: "bold",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="#0066cc"
                  radius={[8, 8, 0, 0]}
                  barSize={40}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-xl font-black text-slate-900 tracking-tight">
            Delivery Trends
          </CardTitle>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
            Cans Per Day
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deliveryData}>
                <defs>
                  <linearGradient id="colorRegular" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0066cc" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0066cc" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorChilled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    fontWeight: "bold",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="regular"
                  stroke="#0066cc"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorRegular)"
                  animationDuration={1500}
                />
                <Area
                  type="monotone"
                  dataKey="chilled"
                  stroke="#0ea5e9"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorChilled)"
                  animationDuration={1500}
                  animationDelay={300}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Regular
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-sky-400" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Chilled
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
