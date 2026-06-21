import { Card, CardContent } from "@/components/ui/card";
import { Sun, CloudRain, Wind } from "lucide-react";

export default function WeatherWidget() {
  return (
    <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-cyan-500 to-blue-500 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
        <Sun className="h-24 w-24" />
      </div>
      <CardContent className="p-5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white/90">Indore, MP</h3>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            Delivery Outlook: Good
          </span>
        </div>
        <div className="flex items-end gap-3 mb-4">
          <h1 className="text-5xl font-bold">34°</h1>
          <p className="text-lg font-medium text-white/90 mb-1">Sunny</p>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-white/80">
          <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <CloudRain className="h-3.5 w-3.5" /> 10%
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <Wind className="h-3.5 w-3.5" /> 12 km/h
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
