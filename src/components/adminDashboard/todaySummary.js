import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, IndianRupee, Map } from "lucide-react";

export default function TodaySummary() {
  const summaries = [
    {
      title: "Deliveries Completed",
      value: "85/120",
      percent: 70,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      progressColor: "bg-emerald-500",
      trend: "+12% vs yesterday",
    },
    {
      title: "Pending Deliveries",
      value: "35",
      percent: 30,
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50",
      progressColor: "bg-amber-500",
      trend: "Route 2 & 4 remaining",
    },
    {
      title: "Today's Collection",
      value: "₹4,250",
      percent: 65,
      icon: IndianRupee,
      color: "text-blue-600",
      bg: "bg-blue-50",
      progressColor: "bg-blue-500",
      trend: "Expected: ₹6,500",
    },
    {
      title: "Remaining Route",
      value: "14 km",
      percent: 45,
      icon: Map,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      progressColor: "bg-indigo-500",
      trend: "Est. time: 2.5 hrs",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {summaries.map((item, index) => (
        <Card
          key={index}
          className="border-slate-200 shadow-sm hover:shadow-md transition-all group overflow-hidden"
        >
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {item.value}
                </h3>
              </div>
              <div
                className={`p-2 rounded-lg ${item.bg} group-hover:scale-110 transition-transform`}
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
            </div>
            <Progress
              value={item.percent}
              className={`h-1.5 w-full bg-slate-100 [&>div]:${item.progressColor}`}
            />
            <p className="text-xs text-slate-400 mt-3 font-medium">
              {item.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
