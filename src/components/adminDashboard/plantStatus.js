import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, Droplet, Thermometer, Database } from "lucide-react";

export default function PlantStatus() {
  return (
    <Card className="border-slate-200 shadow-sm bg-slate-900 text-white">
      <CardHeader className="border-b border-slate-800 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5 text-emerald-400" /> Plant Status: Online
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 grid grid-cols-2 gap-4">
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Droplet className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-medium">TDS Level</span>
          </div>
          <p className="text-xl font-bold">
            12 <span className="text-sm font-normal text-slate-400">ppm</span>
          </p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Thermometer className="h-4 w-4 text-rose-400" />
            <span className="text-xs font-medium">Chiller Temp</span>
          </div>
          <p className="text-xl font-bold">
            14<span className="text-sm font-normal text-slate-400">°C</span>
          </p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 text-slate-400 mb-1">
            <Database className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium">Tank Cap.</span>
          </div>
          <p className="text-xl font-bold">
            85<span className="text-sm font-normal text-slate-400">%</span>
          </p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 flex flex-col justify-center">
          <span className="text-xs font-medium text-slate-400 mb-1">
            RO Machine
          </span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-400">
              Running
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
