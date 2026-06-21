import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Trophy,
  Gift,
  Users,
  ArrowUpRight,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoyaltyRewards() {
  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white h-full flex flex-col">
      <CardHeader className="px-8 pt-8">
        <div className="flex justify-between items-center">
          <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600">
            <Trophy size={24} />
          </div>
          <Badge className="bg-yellow-500 text-white border-none font-black text-[10px] tracking-widest px-3 py-1">
            Gold Tier
          </Badge>
        </div>
        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight mt-6">
          Rewards & Referrals
        </CardTitle>
      </CardHeader>

      <CardContent className="p-8 flex-1 flex flex-col space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Referral Earnings
            </div>
            <div className="text-2xl font-black text-slate-900">₹1,240.00</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Reward Points
            </div>
            <div className="text-2xl font-black text-slate-900">
              2,450{" "}
              <span className="text-xs font-bold text-slate-400">PTS</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 flex-1 relative overflow-hidden group">
          <TrendingUp
            size={80}
            className="absolute -bottom-4 -right-4 text-slate-200 opacity-20 group-hover:scale-110 transition-transform"
          />
          <div className="relative z-10 space-y-4">
            <div className="text-sm font-black text-slate-900">
              Invite & Earn
            </div>
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed max-w-[200px]">
              Get 100 reward points for every friend you refer. They get ₹50 off
              their first jar!
            </p>
            <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100">
              <span className="text-[10px] font-black text-slate-400 select-all">
                AQUA-HMT-24
              </span>
              <Button
                variant="ghost"
                className="h-6 px-2 text-[10px] font-black text-primary ml-auto"
              >
                COPY
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-4 grid grid-cols-2 gap-3">
          <Button className="rounded-2xl h-12 bg-primary font-black shadow-lg shadow-primary/20">
            <Gift className="mr-2" size={18} /> Redeem
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl h-12 border-slate-100 font-black"
          >
            <Users className="mr-2" size={18} /> Invite
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Badge({ children, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
