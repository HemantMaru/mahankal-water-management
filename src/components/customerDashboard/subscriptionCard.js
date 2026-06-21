import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Package,
  RefreshCw,
  ChevronRight,
  Pause,
  Zap,
} from "lucide-react";

export default function SubscriptionCard() {
  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-slate-900 text-white relative h-full">
      <img
        src="{{DATA:IMAGE:IMAGE_30}}"
        alt="Subscription"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <CardHeader className="px-8 pt-8 pb-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <Badge className="bg-cyan-500/20 text-cyan-400 border-none font-black text-[10px] tracking-widest uppercase mb-4">
              Premium Plan
            </Badge>
            <CardTitle className="text-3xl font-black tracking-tight">
              Family Pro Plan
            </CardTitle>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Auto-Renewal
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-8 pb-8 space-y-8 relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Package size={12} className="text-cyan-400" /> Remaining
            </div>
            <div className="text-3xl font-black text-white">
              12 <span className="text-sm font-bold text-slate-500">Jars</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Calendar size={12} className="text-cyan-400" /> Renewal
            </div>
            <div className="text-3xl font-black text-white">
              04 <span className="text-sm font-bold text-slate-500">Nov</span>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>Usage this month</span>
            <span className="text-white">18/30 Jars</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[60%] bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <Button className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-black transition-all group">
            <Zap className="mr-2 fill-amber-400 text-amber-400" size={18} />
            Upgrade Plan
            <ChevronRight
              className="ml-auto group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black"
            >
              <Pause className="mr-2" size={16} /> Pause
            </Button>
            <Button
              variant="outline"
              className="h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black"
            >
              <RefreshCw className="mr-2" size={16} /> History
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
