import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  User,
  Timer,
  Navigation2,
  Phone,
  MessageSquare,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DeliveryTracker() {
  const steps = [
    { label: "Confirmed", status: "completed" },
    { label: "Dispatched", status: "completed" },
    { label: "Out for Delivery", status: "active" },
    { label: "Delivered", status: "pending" },
  ];

  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white group h-full">
      <CardHeader className="px-8 pt-8 pb-0">
        <div className="flex justify-between items-center">
          <div>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold mb-2">
              Live Tracking
            </Badge>
            <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">
              Order #MK-92834
            </CardTitle>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Arriving in
            </div>
            <div className="text-2xl font-black text-primary">18 mins</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        {/* Progress Bar */}
        <div className="relative pt-4">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-primary rounded-full transition-all duration-1000" />
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full border-2 transition-all duration-300",
                    step.status === "completed"
                      ? "bg-primary border-primary"
                      : step.status === "active"
                        ? "bg-white border-primary animate-pulse"
                        : "bg-white border-slate-200",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    step.status === "pending"
                      ? "text-slate-300"
                      : "text-slate-900",
                  )}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Driver Card */}
        <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex items-center justify-between group-hover:bg-white group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                alt="Driver"
                className="w-12 h-12 rounded-2xl object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-900">
                Rajesh Kumar
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 mt-0.5">
                <Star size={10} className="fill-amber-400 text-amber-400" />
                4.9 • Delivery Partner
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl h-10 w-10 border-slate-200 text-primary"
            >
              <Phone size={18} />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl h-10 w-10 border-slate-200 text-primary"
            >
              <MessageSquare size={18} />
            </Button>
          </div>
        </div>

        {/* Fleet Image Showcase */}
        <div className="relative h-48 rounded-[24px] overflow-hidden">
          <img
            src="{{DATA:IMAGE:IMAGE_79}}"
            alt="Delivery Truck"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <div className="text-[10px] font-black text-white/80 uppercase tracking-widest">
                Vehicle Info
              </div>
              <div className="text-sm font-black text-white">
                Truck #24 • MP-13-AQ-9821
              </div>
            </div>
            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20">
              En Route
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
