import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

export default function RevenueGoal() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Target className="h-5 w-5 text-indigo-600" /> Monthly Revenue Target
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-sm text-slate-500 font-medium">Current</p>
            <h3 className="text-2xl font-bold text-slate-900">₹84,200</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 font-medium">Target</p>
            <h3 className="text-lg font-semibold text-slate-700">₹1,00,000</h3>
          </div>
        </div>
        <Progress
          value={84.2}
          className="h-2.5 w-full bg-slate-100 [&>div]:bg-indigo-600 mb-2"
        />
        <p className="text-xs text-slate-500 font-medium flex justify-between">
          <span>84.2% completed</span>
          <span className="text-indigo-600">₹15,800 remaining</span>
        </p>
      </CardContent>
    </Card>
  );
}
