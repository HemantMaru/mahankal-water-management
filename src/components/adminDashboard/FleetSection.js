import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Users, Timer, Navigation2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleetStats = [
  { label: "Active Vehicles", value: "24/28", icon: Truck },
  { label: "Drivers Available", value: "18", icon: Users },
  { label: "Success Rate", value: "99.2%", icon: Timer },
  { label: "Route Efficiency", value: "94%", icon: Navigation2 },
];

export default function FleetSection() {
  return (
    <div className="mb-8">
      <Card className="border-none shadow-2xl shadow-primary/5 rounded-[32px] overflow-hidden bg-white relative group">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        <CardContent className="p-0 flex flex-col lg:flex-row">
          <div className="p-10 flex-1 space-y-8">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Logistics Efficiency
                </h3>
                <p className="text-slate-500 font-bold max-w-md leading-relaxed">
                  Our fleet management system ensures 99.2% on-time delivery
                  across 12 zones in Ujjain. Real-time GPS tracking active for
                  all 24 vehicles.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-xl border-2 font-bold group"
              >
                Manage Fleet
                <ArrowUpRight
                  className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  size={18}
                />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {fleetStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[450px] relative h-64 lg:h-auto overflow-hidden">
            <img
              src="{{DATA:IMAGE:IMAGE_42}}"
              alt="Mahankal Fleet"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white hidden lg:block" />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                Mahankal Logistics Hub • Mumbai
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
