import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Droplet,
  ShieldCheck,
  Microscope,
  Verified,
  ArrowRight,
} from "lucide-react";

export default function WaterQuality() {
  const metrics = [
    { label: "TDS Level", value: "82 ppm", sub: "Optimal Range" },
    { label: "Purity Score", value: "99.9%", sub: "Certified Pure" },
  ];

  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[32px] overflow-hidden bg-white relative group h-full">
      <div className="absolute top-0 right-0 p-8 z-10">
        <Verified className="text-emerald-500 fill-emerald-50" size={48} />
      </div>
      <CardHeader className="px-8 pt-8 relative z-10">
        <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold mb-4 flex items-center gap-2 w-fit">
          <ShieldCheck size={14} />
          Laboratory Verified
        </Badge>
        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">
          Water Quality Report
        </CardTitle>
        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
          Audit Conducted: Oct 22, 2024
        </p>
      </CardHeader>

      <CardContent className="p-8 space-y-8 relative z-10">
        <div className="grid grid-cols-2 gap-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-[24px] border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-500"
            >
              <div className="text-3xl font-black text-slate-900 leading-none">
                {m.value}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
                {m.label}
              </div>
              <div className="text-[9px] font-bold text-emerald-500 mt-1">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-40 rounded-[24px] overflow-hidden">
          <img
            src="{{DATA:IMAGE:IMAGE_21}}"
            alt="Water Lab"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-xl">
              <Microscope size={16} className="text-white" />
            </div>
            <span className="text-xs font-black text-white">
              Facility ID: QC-982
            </span>
          </div>
        </div>

        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors text-xs font-black text-slate-600 group/btn">
          Download Full Chemical Analysis
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </CardContent>
    </Card>
  );
}
